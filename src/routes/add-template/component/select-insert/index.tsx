import { Box } from "@mui/material";
import InsertList from "../insert.list";
import { useAppSelector } from "../../../../config/store/hook";
import { selectInsert } from "../../../../slice/insert.slice";

function SelectInsert() {
  const { insertData } = useAppSelector(selectInsert);
  return (
    <Box>
      <InsertList insertData={insertData} />
    </Box>
  );
}

export default SelectInsert;
