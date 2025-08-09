
import { 
  Button, 
  TableCell,
  TableRow as MUITableRow
} from "@mui/material";

function ContactTableRow({ contact, onEdit, onDelete }) {
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
          onClick={onEdit}
        >
          Edit
        </Button>
        <Button 
          variant="outlined" 
          color="error" 
          size="small"
          onClick={onDelete}
        >
          Delete
        </Button>
      </TableCell>
    </MUITableRow>
  );
}
export default ContactTableRow;
