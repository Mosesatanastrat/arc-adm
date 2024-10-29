import { Box } from "@mui/material";
import BtnWrapper from "../../../../components/form-tag/btn-wrapper";
import { SelectListItemType } from "../../../../types/common.type";

type PictureListFooterType = {
  selectedPicture: SelectListItemType | null;
  handleSelectPictureOk: () => void;
  handleSelectPictureCancel: () => void;
};

function PictureListFooter({
  selectedPicture,
  handleSelectPictureOk,
  handleSelectPictureCancel,
}: PictureListFooterType) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <BtnWrapper variant="contained" color="primary">
        Add
      </BtnWrapper>
      <BtnWrapper
        onClick={handleSelectPictureOk}
        variant="contained"
        color="primary"
        disabled={!selectedPicture}
      >
        OK
      </BtnWrapper>
      <BtnWrapper
        onClick={handleSelectPictureCancel}
        variant="contained"
        color="primary"
      >
        Cancel
      </BtnWrapper>
    </Box>
  );
}

export default PictureListFooter;
