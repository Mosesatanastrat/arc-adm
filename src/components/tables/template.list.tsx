import {
  IconButton,
  Table,
  TableBody,
  TableContainer,
  TableHead,
} from "@mui/material";
import TabRow from "./tab.row";
import TabCell from "./tab.cell";
import EditIcon from "@mui/icons-material/Edit";
import PreviewIcon from "@mui/icons-material/Preview";
import DeleteIcon from "@mui/icons-material/Delete";

function TemplateList() {
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TabRow>
            <TabCell>Sr No.</TabCell>
            <TabCell>Template Name</TabCell>
            <TabCell>Action</TabCell>
          </TabRow>
        </TableHead>
        <TableBody>
          {Array.from(Array(10).keys()).map((item) => (
            <TabRow key={item}>
              <TabCell>{item + 1}</TabCell>
              <TabCell>Template Name</TabCell>
              <TabCell>
                <IconButton color="success" size="small">
                  <EditIcon fontSize="inherit" />
                </IconButton>
                <IconButton color="info" size="small">
                  <PreviewIcon fontSize="inherit" />
                </IconButton>{" "}
                <IconButton color="error" size="small">
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </TabCell>
            </TabRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TemplateList;
