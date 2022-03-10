import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './Layout.css';
import { Button, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Add, Login, NoEncryption, Search, ShoppingBag } from '@mui/icons-material';
import Shop from './Shop';
import SignIn from './SignIn';
import SignUp from './Signup';
import NewArticle from './NewArticle';
import StartScreen from './StartScreen';

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

export default function Navigation() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const theme = useTheme();

  return (
    <Box>
    <Box sx={{ display: 'flex' }}>
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
          <ListItemButton>
            <ListItemIcon>
              <Search/>  
            </ListItemIcon>
            <ListItemText>
              Shop  
            </ListItemText>  
          </ListItemButton>
          <ListItemButton>
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
          <ListItemButton>
            <ListItemIcon>
              <ShoppingBag/>
            </ListItemIcon>
            <ListItemText>
              Einkaufswagen
            </ListItemText>
          </ListItemButton>
          <ListItemButton selected>
            <ListItemIcon>
              <Login/>
            </ListItemIcon>
            <ListItemText>
              Login/Register
            </ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
    <Box sx={{marginLeft: `calc(${theme.spacing(7)} + 1px)`}}>
      <StartScreen/>
    </Box>
    </Box>
  );
}
