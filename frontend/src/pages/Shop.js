import { Add } from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const cards = [
  {
    id: 3,
    name: "Apple 3",
    categories: ["Obst"],
    description:
      "This is healthy. C it's Gemuse.C it's Gemuse.C it's Gemuse.C it's Gemuse.C it's Gemuse.C it's Gemuse.",
  },
  {
    id: 4,
    name: "Apple 4",
    categories: ["Grün"],
    description: "This is healthy. C it's Gemuse.",
  },
  {
    id: 5,
    name: "Apple 5",
    categories: ["Gemüse"],
    description: "This is healthy. C it's Gemuse.",
  },
  {
    id: 6,
    name: "Apple 6",
    categories: ["Lebensmittel", "Obst"],
    description: "This is healthy. C it's Gemuse.",
  },
  {
    id: 7,
    name: "Apple 7",
    categories: ["Obst", "Lebensmittel"],
    description: "This is healthy. C it's Gemuse.",
  },
  {
    id: 8,
    name: "Apple 8",
    categories: ["Gemüse", "Obst", "Getränk"],
    description: "This is healthy. C it's Gemuse.",
  },
];

const categoryNames = [
  "Gemüse",
  "Obst",
  "Lebensmittel",
  "Getränke",
  "Marmelade",
  "Test",
];
export default function Shop() {
  const [categoryFilterList, setFilter] = useState([]);

  const addItemToListWithId = (id) => {
    console.log(id);
  };

  /**
   * handles and adds filter to global filter list on select change event
   * 
   * @param {change event} event : html select obj on change event
   * @param {array/string} value : array or string with all values of the select
   */
  const handleFilterChange = (event, value) => {
    setFilter(value);
  };

  /**
   * checks if item fits with react object declared filter status array
   * 
   * @param {articleObj} item : (Article) Obj. with type array
   * @returns all filters fits - true, otherwise false
   */
  const checkIfInFilter = (item) => {
    if (categoryFilterList.length <= 0) return true;
    for (let catIndex = 0; catIndex < categoryFilterList.length; catIndex++) {
      if (!item.categories.includes(categoryFilterList[catIndex])) return false;
    }
    return true;
  };

  return (
    <Container component="main" maxWidth="lg">
      <Typography variant="h2">Katalog</Typography>

      <Autocomplete
        multiple
        id="filters"
        options={categoryNames}
        getOptionLabel={(category) => category}
        onChange={handleFilterChange}
        sx={{ marginTop: 2 }}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Kategorie Filter"
            placeholder="Filter hinzufügen"
          />
        )}
      />
      <Grid container spacing={2} sx={{ marginTop: 2, marginBottom: "5px" }}>
        {cards
          .filter((card) => checkIfInFilter(card))
          .map((card, index) => {
            const { id, name, categories, description } = card;
            return (
              <Grid item xs={6} sm={4} md={3}>
                <Card
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {description}
                    </Typography>
                    <Box>
                      {categories.map((category) => {
                        return (
                          <Chip
                            sx={{ marginRight: "2px", marginTop: 1 }}
                            label={category}
                          />
                        );
                      })}
                    </Box>
                  </CardContent>
                  <CardActions
                    sx={{ marginTop: "auto", flexDirection: "row-reverse" }}
                  >
                    <Button
                      variant="contained"
                      onClick={() => addItemToListWithId(id)}
                    >
                      <Add />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
}
