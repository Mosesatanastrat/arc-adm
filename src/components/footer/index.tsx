import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { getYear } from "../../helper/date.helper";

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: grey[300],
        textAlign: "center",
        p: 0.5,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: "primary.main",
          fontWeight: (theme) => theme.typography.fontWeightBold,
        }}
      >
        {getYear()} &copy; ARC application, version 2.0
      </Typography>
    </Box>
  );
}

export default Footer;
