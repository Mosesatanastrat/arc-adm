import { styled } from "@mui/material/styles";
import TableRow, { TableRowProps } from "@mui/material/TableRow";

type TabRowProps = {
  children: React.ReactNode;
} & TableRowProps;

const StyledTableRow = styled((props) => <TableRow {...props} />)(
  ({ theme }) => ({
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.primary.light,
    },
  })
);

function TabRow({ children, ...props }: TabRowProps) {
  return (
    <StyledTableRow {...props}>
      <>{children}</>
    </StyledTableRow>
  );
}

export default TabRow;
