import { Stack } from "@mui/material";
import {
  MarkerAxisType,
  SelectListItemType,
} from "../../../../types/common.type";
import ImageMarkerPreview from "../../../../components/image-marker/image.marker.preview";
import { toggleSelect } from "../../../../common/utils/common.fn";
import { ChoicesType } from "../../../../types/insert.type";

type PictureChoiceProps = {
  choices: ChoicesType[];
  picture: SelectListItemType;
  markers: MarkerAxisType[];
  previewSelect: string[];
  setPreviewSelect: React.Dispatch<React.SetStateAction<string[]>>;
};

function PictureChoice({
  choices,
  picture,
  markers,
  previewSelect,
  setPreviewSelect,
}: PictureChoiceProps) {
  const handleMarkerClick = (_: MarkerAxisType, index: number) => {
    const choicesLn = choices.length;
    if (choicesLn <= index) return;
    const id = choices[index].id;
    const newPreviewSelect = toggleSelect(id, previewSelect);
    setPreviewSelect(newPreviewSelect);
  };

  return (
    <Stack>
      <ImageMarkerPreview
        image={picture.picture}
        markers={markers}
        handleMarkerClick={handleMarkerClick}
      />
    </Stack>
  );
}

export default PictureChoice;
