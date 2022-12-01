import {
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const styles = {
  Base: {
    backgroundColor: "rgb(140, 140, 140)",
    mt: 20,
  },
  Content: {
    pt: 2,
    pb: 2,
    color: "white"
  },
  Links: {
    justifyContent: "center",
  },
  Copyright: {
    m: 3
  }
};

export default function Footer() {
  return (
    <Box sx={styles.Base}>
      <Container maxWidth="lg" sx={styles.Content}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          divider={<Divider orientation="vertical" flexItem />}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          sx={styles.Links}
        >
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="inprint">
            Impressum
          </Button>
          <Button color="inherit" component={Link} to="privacy">
            Datenschutz
          </Button>
        </Stack>
        <Typography sx={styles.Copyright} textAlign={"center"} variant="body2">
          Copyright © 2022 Shopler - All rights reserved. 
        </Typography>
      </Container>
    </Box>
  );
}
