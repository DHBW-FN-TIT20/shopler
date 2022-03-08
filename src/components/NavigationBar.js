import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './Layout.css';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Add, Login, Search, ShoppingBag } from '@mui/icons-material';
import { Link, NavLink, useLocation } from 'react-router-dom';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function NavigationBar() {
  const location = useLocation()
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return(
    <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          { open === false ? 
          <IconButton onClick={handleDrawerOpen}>
            <ChevronRightIcon />
          </IconButton>
          :
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
          }
        </DrawerHeader>
        <List>
          <ListItemButton component={Link} to="shop" selected={"/shop" === location.pathname}>
            <ListItemIcon>
              <Search/>  
            </ListItemIcon>
            <ListItemText>
              Shop
            </ListItemText>  
          </ListItemButton>
          <ListItemButton component={Link} to="newarticle" selected={"/newarticle" === location.pathname}>
            <ListItemIcon>
              <Add/>
            </ListItemIcon>
            <ListItemText>
              Artkel hinzufügen
            </ListItemText>
          </ListItemButton>  
        </List>
        <Divider/>
        <List sx={{marginTop: 'auto'}}>
          <ListItemButton component={Link} to="cart" selected={"/cart" === location.pathname}>
            <ListItemIcon>
              <ShoppingBag/>
            </ListItemIcon>
            <ListItemText>
              Einkaufswagen
            </ListItemText>
          </ListItemButton>
          <ListItemButton component={Link} to="signin" selected={location.pathname.startsWith("/sign")}>
            <ListItemIcon>
              <Login/>
            </ListItemIcon>
            <ListItemText>
              Login/Register
            </ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
  )
}