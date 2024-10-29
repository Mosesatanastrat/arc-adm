import { Box } from "@mui/material";
import { SubHeaderTitle } from "../override-com/typography";

type SubHeaderProps = {
  title: string;
};

function SubHeader({ title }: SubHeaderProps) {
  return (
    <Box sx={{ bgcolor: "primary.light", p: 1 }}>
      <SubHeaderTitle>{title}</SubHeaderTitle>
    </Box>
  );
}

export default SubHeader;
