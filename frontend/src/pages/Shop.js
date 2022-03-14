import { Check } from "@mui/icons-material";
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
import { useEffect, useState } from "react";
import getCategories from "../api/Categories";
import { useUserStore } from "../stores/UserStore";

const cards = [];

const categoryNames = [
  "Gemüse",
  "Obst",
  "Lebensmittel",
  "Getränke",
  "Marmelade",
  "Test",
];
export default function Shop() {
  const [didMountCategories, setDidMountCategories] = useState(true);
  const [didMountItems, setDidMountItems] = useState(true);
  const [items, setItems] = useState([]);
  const [categoriesList, setCategories] = useState([]);
  const [categoryFilterList, setFilter] = useState([]);
  const [userStore, userAction] = useUserStore();

  const addItemToListWithId = (e, id) => {
    const button = e.currentTarget;
    const message = {
      itemId: id,
    };
    fetch(process.env.REACT_APP_API_ENDPOINT + "api/addcartitem", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userStore.token}`,
      },
      body: JSON.stringify(message),
    }).then(async (response) => {
      if (!response.ok) {
        console.log(response.status);
      } else {
      }
    });
  };

  /**
   * handles and adds filter to global filter list on select change event
   *
   * @param {changeevent} event : html select obj on change event
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
    if (!categoryFilterList) return true;
    for (let catIndex = 0; catIndex < categoryFilterList.length; catIndex++) {
      if (
        !item.categories.find(
          (category) => category.id === categoryFilterList[catIndex].id
        )
      )
        return false;
    }
    return true;
  };

  async function loadListFromDatabase(token) {
    return await fetch(process.env.REACT_APP_API_ENDPOINT + "api/items", {
      method: "GET",
      headers: {
        Contenttype: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          console.log(response);
          return null;
        }
        const data = await response.json();
        return data;
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  }

  // run after render
  useEffect(() => {
    getsCategories();
    getItems();

    async function loadCategoriesFromDB() {
      return await getCategories(userStore.token);
    }
    async function loadIt() {
      return await loadListFromDatabase(userStore.token);
    }

    async function getItems() {
      if (didMountItems) {
        setDidMountItems(false);
        setItems(await loadIt());
      } else {
        return;
      }
    }
    async function getsCategories() {
      if (didMountCategories) {
        setDidMountCategories(false);
        setCategories(await loadCategoriesFromDB());
      } else {
        return;
      }
    }
  });

  return (
    <Container component="main" maxWidth="lg">
      <Typography variant="h2">Katalog</Typography>

      <Autocomplete
        multiple
        id="filters"
        options={categoriesList}
        getOptionLabel={(category) => category.name}
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
        {items &&
          items
            .filter((item) => checkIfInFilter(item))
            .map((card, index) => {
              const { id, name, description, categories } = card;
              return (
                <Grid key={index} item xs={6} sm={4} md={3}>
                  <Card
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
                        {categoriesList
                          .filter((category) =>
                            categories.find((cat) => cat.id === category.id)
                          )
                          .map((category) => {
                            return (
                              <Chip
                                key={id + category.id}
                                sx={{ marginRight: "2px", marginTop: 1 }}
                                label={category.name}
                              />
                            );
                          })}
                      </Box>
                    </CardContent>
                    <CardActions
                      sx={{ marginTop: "auto", flexDirection: "row-reverse" }}
                    >
                      <Button
                        id={"button" + id}
                        variant="contained"
                        onClick={(e) => addItemToListWithId(e, id)}
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
