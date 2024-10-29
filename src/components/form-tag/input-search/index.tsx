import InputBase, { InputBaseProps } from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";

type InputSearchProps = InputBaseProps;

export default function InputSearch({ ...otherProps }: InputSearchProps) {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: 250,
        borderRadius: 2,
        border: (theme) =>
          `${theme.spacing(0.1)} solid ${theme.palette.primary.main}`,
      }}
    >
      <IconButton
        type="button"
        aria-label="search"
        color="primary"
        sx={{ p: 0.5 }}
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{
          flex: 1,
          fontSize: (theme) => theme.spacing(1.4),
        }}
        {...otherProps}
      />
    </Box>
  );
}
