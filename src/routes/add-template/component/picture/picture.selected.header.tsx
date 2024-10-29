import { IconButton, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type PictureSelectedHeaderProps = {
  handleSelectedPictureClose: () => void;
};
function PictureSelectedHeader({
  handleSelectedPictureClose,
}: PictureSelectedHeaderProps) {
  return (
    <Stack gap={1} flexDirection="row" alignItems="center" justifyContent="end">
      <IconButton
        aria-label="close"
        onClick={handleSelectedPictureClose}
        sx={{
          color: (theme) => theme.palette.grey[500],
          p: 0,
        }}
        size="small"
      >
        <CloseIcon />
      </IconButton>
    </Stack>
  );
}

export default PictureSelectedHeader;
