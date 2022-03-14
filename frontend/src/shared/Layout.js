import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Shop from "../pages/Shop";
import SignIn from "../pages/SignIn";
import NewArticle from "../pages/NewArticle";
import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import SignUp from "../pages/SignUp";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Privacy from "../pages/Privacy";
import { useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import MainTheme from "../theme/MainTheme";
import { useUserStore } from "../stores/UserStore";
import Loader from "./Loader";
import Footer from "./Footer";
import InPrint from "../pages/InPrint";

export default function Layout() {
  // global theme
  const theme = useTheme();
  const [userState, userAction] = useUserStore();

  // checks if screen small for different layout
  const isGreaterThanSmallBreakpoint = useMediaQuery(
    theme.breakpoints.up("sm")
  );


  /**
   * gets token from local storage to check if user was sign in, if so, refreshes token and validates user
   */
  const verifyUser = React.useCallback(() => {
    const refreshToken = localStorage.getItem("refreshToken");
    fetch(process.env.REACT_APP_API_ENDPOINT + "users/refreshToken", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    }).then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("refreshToken", data.refreshToken);
        return userAction.setToken(data.token);
      } else {
        userAction.reset();
      }
      setTimeout(verifyUser, 5 * 60 * 1000);
    });
  }, [userAction]);

  // calls after first render
  React.useEffect(() => {
    verifyUser();
  }, [verifyUser]);

  return (
    <ThemeProvider theme={MainTheme}>
      <React.Fragment>
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
          <Box component="main" sx={{ minHeight: "80vh" }}>
            {userState.token === null || userState.token ? (
              <Routes>
                <Route path="" element={<Home />} />
                <Route
                  path="shop"
                  element={
                    userState.token ? <Shop /> : <Navigate to="/signin" />
                  }
                />
                <Route
                  path="newarticle"
                  element={
                    userState.token ? <NewArticle /> : <Navigate to="/signin" />
                  }
                />
                <Route
                  path="cart"
                  element={
                    userState.token ? <Cart /> : <Navigate to="/signin" />
                  }
                />

                <Route path="signin" element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="inprint" element={<InPrint />} />
                <Route path="privacy" element={<Privacy />} />
              </Routes>
            ) : (
              <Loader />
            )}
          </Box>
          <Footer />
        </Box>
      </React.Fragment>
    </ThemeProvider>
  );
}
