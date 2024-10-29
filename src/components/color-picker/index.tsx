import { SetStateAction, useState } from "react";
import { SketchPicker } from "react-color";
import BtnWrapper from "../form-tag/btn-wrapper";
import { Popover, Stack } from "@mui/material";

type ColorPickerProps = {
  label: string;
  handleColorPick: (color: string) => void;
  value: string;
  disabled?: boolean;
};

function ColorPicker({
  label,
  handleColorPick,
  value,
  disabled,
}: ColorPickerProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(value);

  const handleOpenPopover = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpen(true);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleChange = (color: { hex: SetStateAction<string> }) => {
    setColor(color.hex);
  };

  return (
    <>
      <BtnWrapper
        variant="contained"
        onClick={handleOpenPopover}
        sx={{
          bgcolor: value,
        }}
        disabled={disabled}
      >
        {label}
      </BtnWrapper>
      <Popover open={open} onClose={handleClosePopover} anchorEl={anchorEl}>
        <Stack>
          <SketchPicker color={color} onChange={handleChange} />
          <Stack
            flexDirection="row"
            gap={1}
            p={1}
            justifyContent="space-between"
          >
            <BtnWrapper
              variant="contained"
              onClick={() => {
                handleColorPick(color);
                handleClosePopover();
              }}
            >
              OK
            </BtnWrapper>
            <BtnWrapper variant="contained" onClick={handleClosePopover}>
              Cancel
            </BtnWrapper>
          </Stack>
        </Stack>
      </Popover>
    </>
  );
}

export default ColorPicker;
