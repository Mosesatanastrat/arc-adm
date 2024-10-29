import { Box } from "@mui/material";
import BtnWrapper from "../../../../components/form-tag/btn-wrapper";

type SelectInsertFooterProps = {
  handleInsertClose: () => void;
};

function SelectInsertFooter({ handleInsertClose }: SelectInsertFooterProps) {
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
        onClick={handleInsertClose}
        variant="contained"
        color="primary"
      >
        OK
      </BtnWrapper>
      <BtnWrapper
        onClick={handleInsertClose}
        variant="contained"
        color="primary"
      >
        Cancel
      </BtnWrapper>
    </Box>
  );
}

export default SelectInsertFooter;
