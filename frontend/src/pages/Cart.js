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

export default function Cart() {
  const [didMount, setDidMount] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [userStore, setUserStore] = useUserStore();

  /**
   * removes id with post request from database
   * 
   * @param {number} id : item id
   */
  const removeItemFromCart = (id) => {
    const item = cartItems.find((cart) => cart.id === id);
    setIsSubmitting(true);

    fetch(process.env.REACT_APP_API_ENDPOINT + "api/removecartitem", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userStore.token}`,
      },
      body: JSON.stringify({ cartItemId: id }),
    })
      .then(async (response) => {
        setIsSubmitting(false);
        if (!response.ok) {
          return;
        }
        const newCarts = cartItems.filter((cart) => cart !== item);
        setCartItems(newCarts);
      })
      .catch(() => {
        setIsSubmitting(false);
        return null;
      });
  };

  /**
   * removes Item if checkbox is checked
   * 
   * @param {event} event : checkbox event
   */
  const handleCheckboxChange = (event) => {
    // only if checkbox is checked
    if (event.target.checked) {
      removeItemFromCart(parseInt(event.target.id));
    }
  };

  /**
   * gets CartItems from database
   * 
   * @param {string} token : user token for authentication
   * @returns : array of item objects
   */
  async function loadCartItemsFromDB(token) {
    return await fetch(process.env.REACT_APP_API_ENDPOINT + "api/cartitems", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          return null;
        }
        const data = await response.json();
        return data;
      })
      .catch((error) => {
        return null;
      });
  }

  // calls after render
  useEffect(() => {
    loadCartItems();
    // async func call inside for preventing race conditions
    async function loadCartItems() {
      if (didMount) {
        setDidMount(false);
        setCartItems(await loadCartItemsFromDB(userStore.token));
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
                key={item.name}
                sx={{
                  height: 70
                }}
                button
                divider
                secondaryAction={
                  <Checkbox
                    id={id.toString()}
                    edge="end"
                    onChange={handleCheckboxChange}
                    checked={false}
                    disabled={isSubmitting}
                  />
                }
              >
                <ListItemText>{item.name}</ListItemText>
                <ListItemText sx={{textAlign: "end"}}>{count}</ListItemText>
              </ListItem>
            );
          })}
      </List>
    </Container>
  );
}
