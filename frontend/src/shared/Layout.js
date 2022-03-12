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
import { useMediaQuery } from "@mui/material";

export default function Layout() {
  const theme = useTheme();

  const isGreaterThanSmallBreakpoint = useMediaQuery(
    theme.breakpoints.up("sm")
  );

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
          <Route path="shop" element={<Shop />} />
          <Route path="newarticle" element={<NewArticle />} />
          <Route path="cart" element={<Cart />} />

          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </Box>
  );
}
