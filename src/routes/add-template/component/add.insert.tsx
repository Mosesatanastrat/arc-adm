import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { addTabList } from "../../../common/constants/FormData";
import DetailTab from "./detail.tab";
import ChoicesTab from "./choices.tab";
import PreviewTab from "./preview.tab";
import InsertFooter from "./insert.footer";
import { useAppDispatch, useAppSelector } from "../../../config/store/hook";
import { addInsert, selectInsert } from "../../../slice/insert.slice";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function AddInsert() {
  const dispatch = useAppDispatch();
  const { insertData, insertOperation } = useAppSelector(selectInsert);
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(Number(newValue));
  };

  const addInsertFn = () => {
    const isFind = insertData.find(
      (insert) => insert.id === insertOperation.id
    );
    if (isFind) return;
    dispatch(addInsert(insertOperation));
  };

  const handleSave = () => {
    addInsertFn();
  };

  const handleUndoAll = () => {
    console.log("handleUndoAll");
  };

  const handleDeleteInsert = () => {
    console.log("handleUndoAll");
  };

  const handleAdd = () => {
    console.log("handleUndoAll");
  };

  const handleSaveAndClose = () => {
    console.log("handleUndoAll");
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="lab API tabs example"
        >
          {addTabList.map((tab) => (
            <Tab
              sx={{
                fontWeight: (theme) => theme.typography.fontWeightRegular,
              }}
              key={tab.value}
              label={tab.label}
              value={tab.value}
              {...a11yProps(tab.value)}
            />
          ))}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <DetailTab />
        <InsertFooter
          handleSave={handleSave}
          handleUndoAll={handleUndoAll}
          handleDeleteInsert={handleDeleteInsert}
          handleAdd={handleAdd}
          handleSaveAndClose={handleSaveAndClose}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ChoicesTab />
        <InsertFooter
          handleSave={handleSave}
          handleUndoAll={handleUndoAll}
          handleDeleteInsert={handleDeleteInsert}
          handleAdd={handleAdd}
          handleSaveAndClose={handleSaveAndClose}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <DetailTab />
        <InsertFooter
          handleSave={handleSave}
          handleUndoAll={handleUndoAll}
          handleDeleteInsert={handleDeleteInsert}
          handleAdd={handleAdd}
          handleSaveAndClose={handleSaveAndClose}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <PreviewTab />
        <InsertFooter
          handleSave={handleSave}
          handleUndoAll={handleUndoAll}
          handleDeleteInsert={handleDeleteInsert}
          handleAdd={handleAdd}
          handleSaveAndClose={handleSaveAndClose}
        />
      </CustomTabPanel>
    </Box>
  );
}

export default AddInsert;
