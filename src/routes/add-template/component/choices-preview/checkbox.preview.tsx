import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { ChoicesType } from "../../../../types/insert.type";
import { toggleSelect } from "../../../../common/utils/common.fn";

type CheckboxPreview = {
  choices: ChoicesType[];
  previewSelect: string[];
  setPreviewSelect: React.Dispatch<React.SetStateAction<string[]>>;
};

function CheckboxPreview({
  choices,
  previewSelect,
  setPreviewSelect,
}: CheckboxPreview) {
  const handleToggleSelect = (id: string) => {
    setPreviewSelect(toggleSelect(id, previewSelect));
  };

  return (
    <FormGroup sx={{ flexDirection: "row" }}>
      {choices.map((itm) => {
        const id = itm.id;
        return (
          <FormControlLabel
            control={
              <Checkbox
                checked={previewSelect.includes(id)}
                onChange={() => handleToggleSelect(itm.id)}
                size="small"
              />
            }
            label={itm.name}
          />
        );
      })}
    </FormGroup>
  );
}

export default CheckboxPreview;
