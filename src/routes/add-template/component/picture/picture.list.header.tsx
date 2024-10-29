import { IconButton, Stack } from "@mui/material";
import { InsertTitle } from "../../../../components/override-com/typography";
import CloseIcon from "@mui/icons-material/Close";
import TextfieldWrapper from "../../../../components/form-tag/textfield-wrapper";

type PictureListHeaderProps = {
  handlePictureListClose: () => void;
};

function PictureListHeader({ handlePictureListClose }: PictureListHeaderProps) {
  return (
    <Stack gap={1}>
      <Stack gap={1} flexDirection="row" alignItems="center">
        <InsertTitle
          sx={{
            flexGrow: 1,
            textAlign: "center",
          }}
        >
          Select The Picture
        </InsertTitle>
        <IconButton
          aria-label="close"
          onClick={handlePictureListClose}
          sx={{
            color: (theme) => theme.palette.grey[500],
            p: 0,
          }}
          size="small"
        >
          <CloseIcon />
        </IconButton>
      </Stack>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        gap={1}
      >
        <InsertTitle>Looking For</InsertTitle>
        <TextfieldWrapper size="small" />
      </Stack>
    </Stack>
  );
}

export default PictureListHeader;
