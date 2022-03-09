import { Add, Favorite } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

const cards = [
  {
    image:
      "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg",
    name: "Apple",
    description: "This is healthy. C it's Gemuse.",
  },
  {
    image:
      "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg",
    name: "Apple",
    description: "This is healthy. C it's Gemuse.",
  },
  {
    image:
      "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg",
    name: "Apple",
    description: "This is healthy. C it's Gemuse.",
  },
  {
    image:
      "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg",
    name: "Apple",
    description: "This is healthy. C it's Gemuse.",
  },
  {
    image:
      "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg",
    name: "Apple",
    description: "This is healthy. C it's Gemuse.",
  },
];
export default function Shop() {
  return (
    <Grid container spacing={2} sx={{padding: 10}}>
      {cards.map((cards, index) => {
        const { image, name, description } = cards;
        return (
          <Grid item>
            <Card key={index} sx={{ maxWidth: 345 }}>
              <CardMedia component="img" image={image} height="140"/>
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                >
                  {name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {description}
                </Typography>
              </CardContent>
              <CardActions sx={{float: 'right'}}>
                <IconButton>
                  <Favorite />
                </IconButton>
                <Button variant="contained">
                  <Add />
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
