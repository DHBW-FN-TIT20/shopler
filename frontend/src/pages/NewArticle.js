import { Add } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Chip,
  Container,
  CssBaseline,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useUserStore } from "../stores/UserStore";
import getCategories from "../api/Categories";

//var categories = [];
export default function NewArticle() {
  const [didMount, setDidMount] = useState(true);
  const [categories, setCategories] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [userStore, userAction] = useUserStore();
  const [isSuccess, setIsSuccess] = useState(false);
  const [categoryName, setCategory] = useState(["Sonstiges"]);

  //call function when page is loaded
  useEffect(() => {
    getsCategories();

    //Load categories from DB
    async function loadCategoriesFromDB() {
      return await getCategories(userStore.token);
    }
    // define async func in func to prevent race conditions
    async function getsCategories() {
      if (didMount) {
        setCategories(await loadCategoriesFromDB());
        console.log(categories);
        setDidMount(false);
      } else {
        return;
      }
    }
  });

  /**
   * handles multiple value select add/remove value to React Component State
   *
   * @param {event} event : select change event
   */
  const handleCategoryChange = (event) => {
    const {
      target: { value },
    } = event;
    setCategory(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleSubmit = async (e) => {
    setIsSuccess(false);
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Text inputs
    const data = new FormData(e.currentTarget);
    const form = e.currentTarget;
    // init body message
    let message = {
      itemName: data.get("name"),
      itemDescription: data.get("description"),
      categoryList: categories
        .filter((category) => categoryName.includes(category.name))
        .map((category) => category.id),
    };

    const genericErrorMessage =
      "Etwas ist schief gelaufen, versuchen Sie es erneut.";

    fetch(process.env.REACT_APP_API_ENDPOINT + "api/newitem", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userStore.token}`,
      },
      body: JSON.stringify(message),
    })
      .then(async (response) => {
        setIsSubmitting(false);
        if (!response.ok) {
          if (response.status === 400) {
            setError("Artikelname fehlt");
          } else if (response.status === 404) {
            setError("Kategorie nicht gefunden");
          } else if (response.status === 500) {
            setError(genericErrorMessage);
            const data = await response.json();
            if (data.message) setError(data.nessafe || genericErrorMessage);
          } else {
            setError(genericErrorMessage);
          }
        } else {
          setIsSuccess(true);

          // reset input boxes
          setCategory([]);
          form.reset();
        }
      })
      .catch((error) => {
        setIsSubmitting(false);
        setError(genericErrorMessage);
      });
  };

  return (
    <Container component="main" maxWidth="md">
      {error && <Alert severity="error">{error}</Alert>}
      <CssBaseline />
      <Typography variant="h2" component="h1">
        Artikel hinzufügen
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          disabled={isSubmitting}
          margin="normal"
          required
          fullWidth
          label="Artikelname"
          name="name"
          autoFocus
        />
        <FormControl disabled={isSubmitting} fullWidth margin="normal">
          <InputLabel>Kategorie</InputLabel>
          <Select
            labelId="categories"
            name="categories"
            id="categories"
            multiple
            value={categoryName}
            onChange={handleCategoryChange}
            input={<OutlinedInput id="select-catagories" label="Kategorien" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((category) => (
                  <Chip color="primary" key={category} label={category} />
                ))}
              </Box>
            )}
          >
            {categories.map(({ id, name }) => (
              <MenuItem key={name} value={name} itemID={id}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          disabled={isSubmitting}
          margin="normal"
          required
          fullWidth
          label="Beschreibung"
          name="description"
          autoFocus
          multiline
          minRows={5}
        />
        <Button
          disabled={isSubmitting}
          variant="contained"
          type="submit"
          startIcon={<Add />}
          sx={{ float: "right", mt: 3 }}
        >
          Hinzufügen
        </Button>
      </Box>
    </Container>
  );
}
