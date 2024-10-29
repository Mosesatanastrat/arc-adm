import { Box } from "@mui/material";
import {
  ChoicesType,
  InsetType,
  SelectInsetType,
} from "../../../../types/insert.type";
import RadioChoice from "./radio.choice";
import ButtonChoice from "./button.choice";
import ListPreview from "./list.preview";
import CheckboxPreview from "./checkbox.preview";
import SelectPreview from "./select.preview";
import PictureChoice from "./picture.choice";
import {
  MarkerAxisType,
  SelectListItemType,
} from "../../../../types/common.type";

type ChoicesPreviewProps = {
  choices: ChoicesType[];
  insetType: InsetType;
  colorText: string;
  previewSelect: string[];
  setPreviewSelect: React.Dispatch<React.SetStateAction<string[]>>;
  picture: SelectListItemType | null;
  markers: MarkerAxisType[];
};

function ChoicesPreview({
  choices,
  insetType,
  colorText,
  previewSelect,
  setPreviewSelect,
  picture,
  markers,
}: ChoicesPreviewProps) {
  return (
    <Box p={0.4}>
      {insetType === SelectInsetType.LIST && (
        <ListPreview
          choices={choices}
          previewSelect={previewSelect}
          setPreviewSelect={setPreviewSelect}
        />
      )}
      {insetType === SelectInsetType.CHECKBOX && (
        <CheckboxPreview
          choices={choices}
          previewSelect={previewSelect}
          setPreviewSelect={setPreviewSelect}
        />
      )}
      {insetType === SelectInsetType.BUTTONS && (
        <ButtonChoice
          choices={choices}
          previewSelect={previewSelect}
          setPreviewSelect={setPreviewSelect}
          colorText={colorText}
        />
      )}
      {insetType === SelectInsetType.DROPDOWN && (
        <SelectPreview choices={choices} setPreviewSelect={setPreviewSelect} />
      )}
      {insetType === SelectInsetType.RADIO && (
        <RadioChoice choices={choices} setPreviewSelect={setPreviewSelect} />
      )}
      {insetType === SelectInsetType.PICTURE && picture && (
        <PictureChoice
          picture={picture}
          markers={markers}
          previewSelect={previewSelect}
          setPreviewSelect={setPreviewSelect}
          choices={choices}
        />
      )}
    </Box>
  );
}

export default ChoicesPreview;
