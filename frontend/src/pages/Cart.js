import {
  Checkbox,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const cards = [
  {
    id: 2,
    name: "Apple",
    description: "This is healthy. C it's Gemuse.",
  },
  {
    id: 4,
    name: "Apple",
    description: "This is healthy. C it's Gemuse.",
  },
  {
    id: 3,
    name: "Apple",
    description: "This is healthy. C it's Gemuse.",
  },
  {
    id: 5,
    name: "Apple",
    description: "This is healthy. C it's Gemuse.",
  },
  {
    id: 12,
    name: "Apple",
    description: "This is healthy. C it's Gemuse.",
  },
  {
    id: 3,
    name: "Apple",
    description: "This is healthy. C it's Gemuse.",
  },
  {
    id: 5,
    name: "Apple",
    description: "This is healthy. C it's Gemuse.",
  },
  {
    id: 12,
    name: "Apple",
    description: "This is healthy. C it's Gemuse.",
  },
  {
    id: 3,
    name: "Apple",
    description: "This is healthy. C it's Gemuse.",
  },
  {
    id: 5,
    name: "Apple",
    description: "This is healthy. C it's Gemuse.",
  },
  {
    id: 12,
    name: "Apple",
    description: "This is healthy. C it's Gemuse.",
  },
  {
    id: 3,
    name: "Apple",
    description: "This is healthy. C it's Gemuse.",
  },
  {
    id: 5,
    name: "Apple",
    description: "This is healthy. C it's Gemuse.",
  },
  {
    id: 12,
    name: "Apple",
    description: "This is healthy. C it's Gemuse.",
  },
  {
    id: 3,
    name: "Apple",
    description: "This is healthy. C it's Gemuse.",
  },
  {
    id: 5,
    name: "Apple",
    description: "This is healthy. C it's Gemuse.",
  },
  {
    id: 12,
    name: "Apple",
    description: "This is healthy. C it's Gemuse.",
  },
  {
    id: 3,
    name: "Apple",
    description: "This is healthy. C it's Gemuse.",
  },
  {
    id: 5,
    name: "Apple",
    description: "This is healthy. C it's Gemuse.",
  },
  {
    id: 12,
    name: "Apple",
    description: "This is healthy. C it's Gemuse.",
  },
  {
    id: 3,
    name: "Apple",
    description: "This is healthy. C it's Gemuse.",
  },
  {
    id: 5,
    name: "Apple",
    description: "This is healthy. C it's Gemuse.",
  },
  {
    id: 12,
    name: "Apple",
    description: "This is healthy. C it's Gemuse.",
  },
  {
    id: 3,
    name: "Apple",
    description: "This is healthy. C it's Gemuse. asd asd asd asd asd as d as   asd as d asd",
  },
  {
    id: 5,
    name: "Apple",
    description: "This is healthy. C it's Gemuse.",
  },
  {
    id: 12,
    name: "Apple",
    description: "This is healthy. C it's Gemuse.",
  },
];

const MaxDescriptionLength = 50;
let CheckedItems = [];

export default function Cart() {
  const handleCheckboxChange = (event) =>
    event.target.checked
      ? CheckedItems.push(cards.find((item) => item.id === event.target.id))
      : CheckedItems.splice(
          CheckedItems.find((item) => item.id === event.target.id),
          1
        );

  return (
    <Container maxWidth="md">
      <Typography component="h1" variant="h2">
        Liste
      </Typography>
      <List>
        {cards.map((cards) => {
          const { id, name, description } = cards;
          return (
            <ListItem
              button
              divider
              secondaryAction={
                <Checkbox
                  id={id}
                  edge="end"
                  onChange={handleCheckboxChange}
                  //   checked={checked.indexOf(value) !== -1}
                  //   inputProps={{ 'aria-labelledby': labelId }}
                />
              }
            >
              <ListItemText
                primary={name}
                secondary={
                  description.length < MaxDescriptionLength
                    ? description
                    : description.substring(0, MaxDescriptionLength) + " ..."
                }
              />
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
}
