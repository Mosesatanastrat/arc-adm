import { useState } from "react";
import SelectWrapper from "../../../../components/form-tag/select-wrapper";
import { ChoicesType } from "../../../../types/insert.type";
import { SelectChangeEvent } from "@mui/material";
import { createSelectPreviewOption } from "../../../../common/utils/common.fn";

type SelectPreviewProps = {
  choices: ChoicesType[];
  setPreviewSelect: React.Dispatch<React.SetStateAction<string[]>>;
};

function SelectPreview({ choices, setPreviewSelect }: SelectPreviewProps) {
  const [value, setValue] = useState("");

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const value = event.target.value as string;
    setValue(value);
    setPreviewSelect([value]);
  };

  return (
    <>
      <SelectWrapper
        value={value}
        options={createSelectPreviewOption(choices)}
        placeholder="Select Insert Type"
        onChange={handleChange}
        formControlSX={{
          width: "100%",
        }}
      />
    </>
  );
}

export default SelectPreview;
