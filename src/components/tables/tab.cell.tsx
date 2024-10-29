import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

type TabCellProps = {
  children: React.ReactNode;
} & React.ComponentProps<typeof TableCell>;

const StyledTableCell = styled((props) => <TableCell {...props} />)(
  ({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: grey[300],
      color: theme.palette.secondary.main,
      fontSize: 14,
      fontWeight: 600,
      border: `1px solid ${theme.palette.secondary.main}`,
      textAlign: "center",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 12,
      color: theme.palette.secondary.main,
      border: `1px solid ${theme.palette.secondary.main}`,
      textAlign: "center",
    },
  })
);

function TabCell({ children, ...props }: TabCellProps) {
  return <StyledTableCell {...props}>{children}</StyledTableCell>;
}

export default TabCell;
