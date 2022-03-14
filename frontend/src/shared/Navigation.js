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
  Typography,
} from "@mui/material";
import {
  Add,
  Home,
  Login,
  Logout,
  Menu,
  Search,
  ShoppingBag,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { useUserStore } from "../stores/UserStore";
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

export default function Navigation({ smallscreen }) {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const [userStore, userAction] = useUserStore();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logoutHandler = () => {
    const refreshToken = localStorage.getItem("refreshToken");
    fetch(process.env.REACT_APP_API_ENDPOINT + "users/logout", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userStore.token}`
      },
      body: JSON.stringify({refreshToken})
    }).then(async response => {
      userAction.reset();
      localStorage.removeItem("refreshToken");
    });
  }

  return (
    <React.Fragment>
      {!smallscreen ? (
        <AppBar position="fixed">
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
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Shopler
            </Typography>
          </Toolbar>
        </AppBar>
      ) : null}

      <Drawer variant="permanent" open={open} smallscreen={smallscreen.toString()}>
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
            to=""
            selected={"/" === location.pathname}
          >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
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
          <ListItemButton
            component={Link}
            to="cart"
            selected={"/cart" === location.pathname}
          >
            <ListItemIcon>
              <ShoppingBag />
            </ListItemIcon>
            <ListItemText>Einkaufsliste</ListItemText>
          </ListItemButton>
        </List>
        <Divider />
        <List sx={{ marginTop: "auto" }}>
          <Divider />
          {userStore.token ? (
            <ListItemButton
              onClick={logoutHandler}
            >
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText>Ausloggen</ListItemText>
            </ListItemButton>
          ) : (
            <ListItemButton
              component={Link}
              to="signin"
              selected={location.pathname.startsWith("/sign")}
            >
              <ListItemIcon>
                <Login />
              </ListItemIcon>
              <ListItemText>Login | Registrieren</ListItemText>
            </ListItemButton>
          )}
        </List>
      </Drawer>
    </React.Fragment>
  );
}
