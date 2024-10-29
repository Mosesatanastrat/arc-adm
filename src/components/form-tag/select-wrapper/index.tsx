import MenuItem from "@mui/material/MenuItem";
import FormControl, { FormControlProps } from "@mui/material/FormControl";
import Select, { SelectProps } from "@mui/material/Select";
import { styled } from "@mui/material";

type SelectWrapperProps = {
  options: { value: string | number; label: string }[];
  formControlSX?: FormControlProps["sx"];
} & SelectProps;

const CustomSelect = styled(Select)<SelectProps>(({ theme }) => ({
  "& .MuiSelect-select": {
    padding: theme.spacing(0.9),
    borderRadius: 4,
    backgroundColor: theme.palette.background.default,
    fontSize: theme.spacing(1.2),
  },
}));

function SelectWrapper({
  options,
  formControlSX,
  ...otherProps
}: SelectWrapperProps) {
  return (
    <FormControl size="small" sx={{ ...formControlSX }}>
      <CustomSelect {...otherProps}>
        {options.map((item) => (
          <MenuItem
            key={item.value}
            sx={{
              fontSize: (theme) => theme.spacing(1.2),
            }}
            value={item.value}
          >
            {item.label}
          </MenuItem>
        ))}
      </CustomSelect>
    </FormControl>
  );
}

export default SelectWrapper;
