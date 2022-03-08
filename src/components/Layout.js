import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import './Layout.css';
import Shop from './Shop';
import SignIn from './SignIn';
import NewArticle from './NewArticle';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import SignUp from './SignUp';
import Cart from './Cart';


export default function Navigation() {
  const theme = useTheme();

  return (
    <Box>
    <Box sx={{ display: 'flex' }}>
      <NavigationBar />
    </Box>
      <Box sx={{marginLeft: `calc(${theme.spacing(7)} + 1px)`}}>
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
