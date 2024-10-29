import { IconButton, Stack } from "@mui/material";
import { InsertTitle } from "../../../../components/override-com/typography";
import TextfieldWrapper from "../../../../components/form-tag/textfield-wrapper";
import SelectWrapper from "../../../../components/form-tag/select-wrapper";
import { selectInsertFilterOptions } from "../../../../common/constants/FormData";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import BtnWrapper from "../../../../components/form-tag/btn-wrapper";

type SelectInsertHeaderProps = {
  handleInsertClose: () => void;
  handleAddOpen: () => void;
};

function SelectInsertHeader({
  handleInsertClose,
  handleAddOpen,
}: SelectInsertHeaderProps) {
  return (
    <Stack gap={1}>
      <Stack gap={1} flexDirection="row" alignItems="center">
        <InsertTitle
          sx={{
            flexGrow: 1,
            textAlign: "center",
          }}
        >
          Select an Insert
        </InsertTitle>
        <IconButton
          aria-label="close"
          onClick={handleInsertClose}
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
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        gap={1}
      >
        <InsertTitle>Show Insert Type</InsertTitle>
        <SelectWrapper
          sx={{
            minWidth: (theme) => theme.spacing(22.2),
          }}
          options={selectInsertFilterOptions}
          value={"all"}
        />
      </Stack>
      <Stack>
        <BtnWrapper
          variant="outlined"
          startIcon={<AddIcon />}
          sx={{
            float: "right",
            mb: 1,
          }}
          onClick={handleAddOpen}
        >
          Add
        </BtnWrapper>
      </Stack>
    </Stack>
  );
}

export default SelectInsertHeader;
