import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Logs from "./logs";

type CusPaginationProps = {
  page: number;
  rowPerPage: number;
  total: number;
  handleChangePage: (page: number) => void;
} & React.ComponentProps<typeof Pagination>;

const CusPagination = ({
  page,
  rowPerPage,
  total,
  handleChangePage,
  ...otherProps
}: CusPaginationProps) => {
  return (
    <Stack
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDirection="row"
      px={1}
      sx={{ backgroundColor: (theme) => theme.palette.common.white }}
    >
      <Pagination
        count={Math.ceil(total / rowPerPage)}
        page={page}
        onChange={(_, page) => {
          handleChangePage(page);
        }}
        sx={{
          margin: "1rem 0",
          "& .MuiPaginationItem-root": {
            fontSize: (theme) => theme.spacing(1.4),
            "& .MuiSvgIcon-root": {
              fontSize: (theme) => theme.spacing(2.5),
              color: "primary.main",
            },
          },
        }}
        color="primary"
        shape="rounded"
        showFirstButton
        showLastButton
        {...otherProps}
      />
      <Logs
        start={page * rowPerPage - rowPerPage + 1}
        end={page * rowPerPage > total ? total : page * rowPerPage}
        total={total}
        title="items"
      />
    </Stack>
  );
};

export default CusPagination;
