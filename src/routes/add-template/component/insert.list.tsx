import { Table, TableBody, TableContainer, TableHead } from "@mui/material";
import TabRow from "../../../components/tables/tab.row";
import TabCell from "../../../components/tables/tab.cell";
import { InsertType } from "../../../types/insert.type";

type InsertListProps = {
  insertData: InsertType[];
};

function InsertList({ insertData }: InsertListProps) {
  const insertDataLn = insertData.length;
  if (insertDataLn === 0) return null;
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TabRow>
            <TabCell>Name</TabCell>
            <TabCell>Question</TabCell>
          </TabRow>
        </TableHead>
        <TableBody>
          {insertData.map((item, index) => (
            <TabRow key={index}>
              <TabCell>{item.name}</TabCell>
              <TabCell>{item.question}</TabCell>
            </TabRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default InsertList;
