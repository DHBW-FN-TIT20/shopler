import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Shop from "../pages/Shop";
import SignIn from "../pages/SignIn";
import NewArticle from "../pages/NewArticle";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import SignUp from "../pages/SignUp";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Impressum from "../pages/Impressum";
import { useMediaQuery } from "@mui/material";
import { useUserStore } from "../stores/UserStore";
import Loader from "./Loader";

export default function Layout() {
  const theme = useTheme();

  const isGreaterThanSmallBreakpoint = useMediaQuery(
    theme.breakpoints.up("sm")
  );

  const [userState, userAction] = useUserStore();

  const verifyUser = React.useCallback(() => {
    fetch(process.env.REACT_APP_API_ENDPOINT + "users/refreshToken", {
      method: "POST",
      credentials: "include",
      headers: {"Content-Type": "application/json"}
    }).then(async response => {
      if (response.ok) {
        const data = await response.json();
        return userAction.setToken(data.token);
      } else {
        userAction.reset();
      }
      setTimeout(verifyUser, 5* 60 * 1000);
    })
  }, [userAction]);

  React.useEffect(() => {
    verifyUser();
  }, [verifyUser]);

  if (userState.token === null) {
    return(
    <Box>
      <Navigation smallscreen={isGreaterThanSmallBreakpoint} />

      <Box
        sx={{
          marginLeft: isGreaterThanSmallBreakpoint
            ? `calc(${theme.spacing(7)} + 1px)`
            : null,
          marginTop: !isGreaterThanSmallBreakpoint
            ? `calc(${theme.spacing(10)} + 1px)`
            : 5,
          overflowX: "hidden",
        }}
      >
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="shop" element={<SignIn />} />
          <Route path="newarticle" element={<SignIn />} />
          <Route path="home" element={<Home />} />
          <Route path="cart" element={<SignIn />} />

          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="impressum" element={<Impressum />} />
        </Routes>
      </Box>
    </Box>
  )} else if (userState.token) {
    return (
      <Box>
        <Navigation smallscreen={isGreaterThanSmallBreakpoint} />

        <Box
          sx={{
            marginLeft: isGreaterThanSmallBreakpoint
              ? `calc(${theme.spacing(7)} + 1px)`
              : null,
            marginTop: !isGreaterThanSmallBreakpoint
              ? `calc(${theme.spacing(10)} + 1px)`
              : 5,
            overflowX: "hidden",
          }}
        >
          <Routes>
            <Route path="" element={<Home/>} />
            <Route path="shop" element={<Shop />} />
            <Route path="newarticle" element={<NewArticle />} />
            <Route path="home" element={<Home />} />
            <Route path="cart" element={<Cart />} />

            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Routes>
        </Box>
      </Box>
    );
  } else {
    return(
      <Box>
        <Navigation smallscreen={isGreaterThanSmallBreakpoint} />

        <Box
          sx={{
            marginLeft: isGreaterThanSmallBreakpoint
              ? `calc(${theme.spacing(7)} + 1px)`
              : null,
            marginTop: !isGreaterThanSmallBreakpoint
              ? `calc(${theme.spacing(10)} + 1px)`
              : 5,
            overflowX: "hidden",
          }}
        >
          <Loader/>
        </Box>
      </Box>
    );
  }
}
