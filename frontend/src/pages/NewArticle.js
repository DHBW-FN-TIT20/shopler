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
import { useState } from "react";

// dummyvalues
const categorys = ["Gemüse", "Obst", "Lebensmittel", "Getränke", "Marmelade"];
export default function NewArticle() {
  const [categoryName, setCategory] = useState([]);

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

  /**
   * handles form submit with name, categorys, description values
   * 
   * @param {Event} event : form submit event
   */
  const handleSubmit = (event) => {
    setCategory("Gemüse");
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      Name: data.get("name"),
      Categorys: data.get("categorys"),
      Description: data.get("description"),
    });

    setCategory([]);
    event.currentTarget.reset();
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Typography variant="h2" component="h1">
        Neuer Artikel
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
          <InputLabel>Kategorien</InputLabel>
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
          sx={{ float: "right", mt: 3 }}
        >
          Hinzufügen
        </Button>
      </Box>
    </Container>
  );
}
