import { Table, TableBody, TableContainer, TableHead } from "@mui/material";
import TabRow from "../tables/tab.row";
import TabCell from "../tables/tab.cell";
import { SelectListItemType } from "../../types/common.type";

type SelectListItemProps = {
  title: string;
  list: SelectListItemType[];
  handleSelect: (item: SelectListItemType) => void;
  selectedItem: SelectListItemType | null;
};

function SelectListItem({
  title,
  list,
  selectedItem,
  handleSelect,
}: SelectListItemProps) {
  return (
    <>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TabRow>
              <TabCell>{title}</TabCell>
            </TabRow>
          </TableHead>
          <TableBody>
            {list.map((item, index) => (
              <TabRow
                key={index}
                sx={{
                  "&:nth-of-type(even)": {
                    bgcolor: (theme) => theme.palette.common.white,
                  },
                  cursor: "pointer",
                  ...(selectedItem &&
                    item.id === selectedItem.id && {
                      bgcolor: (theme) => theme.palette.primary.main,
                      "&:nth-of-type(even)": {
                        bgcolor: (theme) => theme.palette.primary.main,
                      },
                    }),
                }}
                onClick={() => handleSelect(item)}
              >
                <TabCell>{item.name}</TabCell>
              </TabRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default SelectListItem;
