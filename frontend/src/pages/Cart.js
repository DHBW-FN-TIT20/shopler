import {
  Checkbox,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useUserStore } from "../stores/UserStore";

const MaxDescriptionLength = 50;
let CheckedItems = [];

export default function Cart() {
  const [didMount, setDidMount] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [userStore, setUserStore] = useUserStore();

  const removeItemFromCart = (id) => {
    const item = cartItems.find((cart) => cart.id === id);
    console.log(id);
    console.log(item);

    fetch(process.env.REACT_APP_API_ENDPOINT + "api/removecartitem", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userStore.token}`,
      },
      body: JSON.stringify({ cartItemId: id }),
    }).then(async (response) => {
      if (!response.ok) {
        console.log(response);
      } else {
        const newCarts = cartItems.filter(cart => cart !== item);
        console.log(newCarts);
        setCartItems(newCarts);
      }
    });
  };

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      removeItemFromCart(parseInt(event.target.id));
    }
  };

  async function loadCartFromDB(token) {
    return await fetch(process.env.REACT_APP_API_ENDPOINT + "api/cartitems", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          console.log(response);
          return null;
        }
        console.log(response);
        const data = await response.json();
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  }

  useEffect(() => {
    getCartItems();
    async function getCartItems() {
      if (didMount) {
        setDidMount(false);
        setCartItems(await loadCartFromDB(userStore.token));
      }
    }
  });

  return (
    <Container maxWidth="md">
      <Typography component="h1" variant="h2">
        Liste
      </Typography>
      <List>
        {cartItems &&
          cartItems.map((card) => {
            const { id, count, item } = card;
            return (
              <ListItem
                button
                divider
                secondaryAction={
                  <Checkbox
                    id={id}
                    edge="end"
                    onChange={handleCheckboxChange}
                    checked={false}
                  />
                }
              >
                <ListItemText>{item.name}</ListItemText>
                <ListItemText>{count}</ListItemText>
              </ListItem>
            );
          })}
      </List>
    </Container>
  );
}
