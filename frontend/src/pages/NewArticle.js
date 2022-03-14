import { Add } from "@mui/icons-material";
import {
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
import React, { useState } from "react";
import { useUserStore } from "../stores/UserStore";
import getCategories from "../api/Categories";


// dummyvalues
const categorys = ["Gemüse", "Obst", "Lebensmittel", "Getränke"];
export default function NewArticle() {
  const [open, setOpen] = React.useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [userStore, userAction] = useUserStore();
  const [isSuccess, setIsSuccess] = useState(false);
  const [articleName, setArticleName] = useState("");
  const [description, setDescription] = useState("");
  const [categoryName, setCategory] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

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

  const handleSubmit = async e => {
    setIsSuccess(false);
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    var nachricht = {}
    nachricht.itemName= articleName;
    nachricht.itemDescription=description;
    nachricht.categoryList=getCategories(userStore.token);
    body: JSON.stringify(nachricht);

    const genericErrorMessage = "Etwas ist schief gelaufen, versuchen Sie es erneut."

    fetch(process.env.REACT_APP_API_ENDPOINT + "api/newitem", {
      method: "POST",
      credentials: "include",
      headers: {"Content-Type": "application/json",
      Authorization: `Bearer ${userStore.token}`},
      body: JSON.stringify(nachricht)
    })

    .then(async response => {
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
        const data = await response.json();
        setIsSuccess(true);
      }
    })
    .catch(error => {
      setIsSubmitting(false);
      setError(genericErrorMessage);
    })
  }

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Typography variant="h2" component="h1">
        Artikel hinzufügen
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Artikelname"
          name="name"
          autoFocus
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Kategorie</InputLabel>
          <Select
            labelId="categorys"
            name="categorys"
            id="categorys"
            multiple
            value={categoryName}
            onChange={handleCategoryChange}
            input={<OutlinedInput id="select-categorys" label="Kategorien" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip color="secondary" key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {categorys.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
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
          variant="contained"
          type="submit"
          startIcon={<Add />}
          sx={{ float: "right", mt: 3}}
        >
          Hinzufügen
        </Button>
      </Box>
    </Container>
  );
}
