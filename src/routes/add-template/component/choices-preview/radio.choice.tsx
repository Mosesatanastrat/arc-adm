import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";
import { ChoicesType } from "../../../../types/insert.type";

type RadioChoiceProps = {
  choices: ChoicesType[];
  setPreviewSelect: React.Dispatch<React.SetStateAction<string[]>>;
};

function RadioChoice({ choices, setPreviewSelect }: RadioChoiceProps) {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setValue(value);
    setPreviewSelect([value]);
  };

  return (
    <>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          {choices.map((itm) => {
            return (
              <FormControlLabel
                value={itm.id}
                control={<Radio size="small" />}
                label={itm.name}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default RadioChoice;
