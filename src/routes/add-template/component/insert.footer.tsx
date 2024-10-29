import { Stack } from "@mui/material";
import BtnWrapper from "../../../components/form-tag/btn-wrapper";

type InsertFooterProps = {
  handleSave: () => void;
  handleUndoAll: () => void;
  handleDeleteInsert: () => void;
  handleAdd: () => void;
  handleSaveAndClose: () => void;
};

function InsertFooter({
  handleSave,
  handleUndoAll,
  handleDeleteInsert,
  handleAdd,
  handleSaveAndClose,
}: InsertFooterProps) {
  return (
    <Stack flexDirection="row" justifyContent="space-between">
      <BtnWrapper variant="contained" onClick={handleSave}>
        Save
      </BtnWrapper>
      <BtnWrapper variant="contained" onClick={handleUndoAll}>
        Undo All
      </BtnWrapper>
      <BtnWrapper variant="contained" onClick={handleDeleteInsert}>
        Delete Insert
      </BtnWrapper>
      <BtnWrapper variant="contained" onClick={handleAdd}>
        Add
      </BtnWrapper>
      <BtnWrapper variant="contained" onClick={handleSaveAndClose}>
        Save & Close
      </BtnWrapper>
    </Stack>
  );
}

export default InsertFooter;
