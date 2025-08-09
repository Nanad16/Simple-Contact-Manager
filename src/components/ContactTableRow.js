
import { 
  Button, 
  TableCell,
  TableRow as MUITableRow
} from "@mui/material";

function ContactTableRow({ contact, onDelete }) {
    return (
    <MUITableRow key={contact.id}>
      <TableCell>{contact.name}</TableCell>
      <TableCell>{contact.email}</TableCell>
      <TableCell>{contact.phone}</TableCell>
      <TableCell>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          style={{ marginRight: "8px" }}
        >
          Edit
        </Button>
        <Button variant="outlined" color="error" size="small">
          Delete
        </Button>
      </TableCell>
    </MUITableRow>
  );
}
export default ContactTableRow;
