import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Shop from "./Shop";
import SignIn from "./SignIn";
import NewArticle from "./NewArticle";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import SignUp from "./SignUp";
import Cart from "./Cart";
import { useMediaQuery } from "@mui/material";

export default function Layout() {
  const theme = useTheme();

  const isGreaterThanSmallBreakpoint = useMediaQuery(
    theme.breakpoints.up("sm")
  );

  return (
    <Box>
      <Navigation smallScreen={isGreaterThanSmallBreakpoint} />

      <Box
        sx={{
          marginLeft: isGreaterThanSmallBreakpoint
            ? `calc(${theme.spacing(7)} + 1px)`
            : null,
          marginTop: !isGreaterThanSmallBreakpoint
            ? `calc(${theme.spacing(7)} + 1px)`
            : null,
        }}
      >
        <Routes>
          <Route path="shop" element={<Shop />} />
          <Route path="newarticle" element={<NewArticle />} />
          <Route path="cart" element={<Cart />} />

          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </Box>
    </Box>
  );
}
