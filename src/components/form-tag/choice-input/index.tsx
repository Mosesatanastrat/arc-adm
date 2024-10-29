import { InputBase, InputBaseProps, Stack } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { green } from "@mui/material/colors";
import { forwardRef, useState } from "react";

type ChoiceInputProps = {
  id: string;
  setCurrentChoice: (value: string | null) => void;
} & InputBaseProps;

const ChoiceInput = forwardRef(
  ({ id, setCurrentChoice, ...otherProps }: ChoiceInputProps, ref) => {
    const [isFocus, setIsFocus] = useState(false);

    const handleOnFocus = (id: string) => {
      setCurrentChoice(id);
      setIsFocus(true);
    };

    const handleOnBlur = () => {
      setIsFocus(false);
    };

    return (
      <Stack
        flexDirection="row"
        alignItems="center"
        sx={{
          backgroundColor: isFocus ? green[500] : "transparent",
          flex: 1,
        }}
      >
        {isFocus ? <SwapVertIcon /> : <CheckBoxOutlineBlankIcon />}
        <InputBase
          placeholder="Type Choice Name Here"
          onFocus={() => handleOnFocus(id)}
          onBlur={handleOnBlur}
          ref={ref}
          {...otherProps}
        />
      </Stack>
    );
  }
);

export default ChoiceInput;
