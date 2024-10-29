import { Box, Button, Stack } from "@mui/material";
import SubHeader from "../../components/header/sub.header";
import TextfieldWrapper from "../../components/form-tag/textfield-wrapper";
import Editor from "../../components/editor/editor";
import CusDialog from "../../components/cus-dialog";
import { useState } from "react";
import SelectInsert from "./component/select-insert";
import {
  getChoiceObj,
  getInsertOperationInitial,
} from "../../common/constants/FormData";
import AddInsert from "./component/add.insert";
import { useAppDispatch } from "../../config/store/hook";
import { handleInsertChange } from "../../slice/insert.slice";
import { randomId } from "../../common/utils/random";
import SelectInsertHeader from "./component/select-insert/select.insert.header";
import SelectInsertFooter from "./component/select-insert/select.insert.footer";

function AddTemplate() {
  const dispatch = useAppDispatch();
  const [isOpenInsert, setIsOpenInsert] = useState(false);
  const [isOpenAdd, setIsOpenAdd] = useState(false);

  const handleInsertOpen = () => {
    setIsOpenInsert(true);
  };

  const handleInsertClose = () => {
    setIsOpenInsert(false);
  };

  const handleAddOpen = () => {
    dispatch(
      handleInsertChange({
        id: randomId(),
        choices: [getChoiceObj({ choId: randomId(), randId: randomId() })],
      })
    );
    setIsOpenAdd(true);
    handleInsertClose();
  };

  const handleAddClose = () => {
    setIsOpenAdd(false);
    dispatch(
      handleInsertChange({
        ...getInsertOperationInitial({ choId: randomId(), randId: randomId() }),
      })
    );
  };

  return (
    <>
      <SubHeader title="Add a Template" />
      <Stack flexDirection="row" gap={1} px={1} py={2}>
        <TextfieldWrapper label="Name" size="small" />
        <TextfieldWrapper label="Short Name" size="small" />
        <Button onClick={handleInsertOpen} variant="contained" color="primary">
          Insert
        </Button>
      </Stack>
      <Box sx={{ mx: 1 }}>
        <Editor />
      </Box>
      <CusDialog
        open={isOpenInsert}
        handleClose={handleInsertClose}
        header={() => (
          <SelectInsertHeader
            handleInsertClose={handleInsertClose}
            handleAddOpen={handleAddOpen}
          />
        )}
        footer={() => (
          <SelectInsertFooter handleInsertClose={handleInsertClose} />
        )}
        dividers
      >
        <SelectInsert />
      </CusDialog>
      <CusDialog
        maxWidth="lg"
        open={isOpenAdd}
        handleClose={handleAddClose}
        fullWidth
      >
        <AddInsert />
      </CusDialog>
    </>
  );
}

export default AddTemplate;
