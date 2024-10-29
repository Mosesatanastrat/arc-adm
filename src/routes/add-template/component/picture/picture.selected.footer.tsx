import { Box } from "@mui/material";
import BtnWrapper from "../../../../components/form-tag/btn-wrapper";
import { MarkerAxisType } from "../../../../types/common.type";

type PictureSelectedFooterProps = {
  handleSelectedPicture: () => void;
  handleDeletePicture: () => void;
  handleAddPicture: () => void;
  markers: MarkerAxisType[];
};

function PictureSelectedFooter({
  handleSelectedPicture,
  handleDeletePicture,
  handleAddPicture,
  markers,
}: PictureSelectedFooterProps) {
  const isMinimumOneMarker = markers.length > 0;
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <BtnWrapper
        variant="contained"
        color="primary"
        onClick={handleSelectedPicture}
        disabled={!isMinimumOneMarker}
      >
        Select
      </BtnWrapper>
      <BtnWrapper
        onClick={handleDeletePicture}
        variant="contained"
        color="primary"
      >
        Delete
      </BtnWrapper>
      <BtnWrapper
        onClick={handleAddPicture}
        variant="contained"
        color="primary"
      >
        New Picture
      </BtnWrapper>
    </Box>
  );
}

export default PictureSelectedFooter;
