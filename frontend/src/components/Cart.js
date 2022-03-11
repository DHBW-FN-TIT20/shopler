import { Button, Container, Typography } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'listName', headerName: 'Einkaufsliste', width: 130 },
];

const rows = [
  { id: 1, listName: 'Lasagne' },
  { id: 2, listName: 'Spaghetthos'},
  { id: 3, listName: 'Deine Mudda' },

];

export default function Cart() {
  return (
    <Container>
      <Typography component="h1" variant="h2">
        Einkaufslisten
      </Typography>
      <Container>
        <Button variant="outlined">
          Einkaufsliste Anlegen
        </Button>
        <Button variant="outlined">
          Ausgewählte Listen löschen
        </Button>
      </Container>
      <Container>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </Container>
    </Container>
  )
}