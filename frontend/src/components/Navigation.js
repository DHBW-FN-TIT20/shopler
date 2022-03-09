import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  AppBar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Add, Login, Menu, Search, ShoppingBag } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/system";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme, smallscreen) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: smallscreen ? `calc(${theme.spacing(7)} + 1px)` : 0,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, smallscreen }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme, smallscreen),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Navigation(props) {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      { !props.smallscreen ? (
        <AppBar position="fixed" sx={{flexDirection: "row-reverse"}}>
          <Toolbar>
            <IconButton
              onClick={!open ? handleDrawerOpen : handleDrawerClose}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <Menu />
            </IconButton>
          </Toolbar>
        </AppBar>
      ) : null }

      <Drawer
        variant="permanent"
        open={open}
        smallscreen={props.smallscreen}
      >
        <DrawerHeader>
          {open === false ? (
            <IconButton color="inherit" onClick={handleDrawerOpen}>
              <ChevronRightIcon />
            </IconButton>
          ) : (
            <IconButton color="inherit" onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          )}
        </DrawerHeader>
        <List>
          <ListItemButton
            component={Link}
            to="shop"
            selected={"/shop" === location.pathname}
          >
            <ListItemIcon>
              <Search />
            </ListItemIcon>
            <ListItemText>Shop</ListItemText>
          </ListItemButton>
          <ListItemButton
            component={Link}
            to="newarticle"
            selected={"/newarticle" === location.pathname}
          >
            <ListItemIcon>
              <Add />
            </ListItemIcon>
            <ListItemText>Artkel hinzufügen</ListItemText>
          </ListItemButton>
        </List>
        <Divider />
        <List sx={{ marginTop: "auto" }}>
          <ListItemButton
            component={Link}
            to="cart"
            selected={"/cart" === location.pathname}
          >
            <ListItemIcon>
              <ShoppingBag />
            </ListItemIcon>
            <ListItemText>Einkaufswagen</ListItemText>
          </ListItemButton>
          <ListItemButton
            component={Link}
            to="signin"
            selected={location.pathname.startsWith("/sign")}
          >
            <ListItemIcon>
              <Login />
            </ListItemIcon>
            <ListItemText>Login/Register</ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
}