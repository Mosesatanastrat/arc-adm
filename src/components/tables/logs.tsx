import { Box } from "@mui/material";

type LogsProps = {
  start: number;
  end: number;
  total: number;
  title: string;
};

const Logs = ({ start, end, total, title }: LogsProps) => {
  return (
    <Box
      component="h1"
      sx={{
        fontSize: (theme) => theme.spacing(1.4),
        fontWeight: 500,
        color: "secondary.main",
      }}
    >
      {start} - {end} of {total} {title}
    </Box>
  );
};

export default Logs;
