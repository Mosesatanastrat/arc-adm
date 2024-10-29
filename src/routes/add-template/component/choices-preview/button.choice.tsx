import { Stack } from "@mui/material";
import { ChoicesType } from "../../../../types/insert.type";
import BtnWrapper from "../../../../components/form-tag/btn-wrapper";
import { toggleSelect } from "../../../../common/utils/common.fn";

type ButtonChoiceProps = {
  choices: ChoicesType[];
  colorText: string;
  previewSelect: string[];
  setPreviewSelect: React.Dispatch<React.SetStateAction<string[]>>;
};

function ButtonChoice({
  choices,
  colorText,
  previewSelect,
  setPreviewSelect,
}: ButtonChoiceProps) {
  const handleToggleSelect = (id: string) => {
    setPreviewSelect(toggleSelect(id, previewSelect));
  };

  return (
    <Stack flexDirection="row" gap={0.5} flexWrap="wrap">
      {choices.map((itm) => {
        const id = itm.id;
        return (
          <BtnWrapper
            key={id}
            onClick={() => handleToggleSelect(itm.id)}
            variant="contained"
            sx={{
              bgcolor: previewSelect.includes(id)
                ? "secondary.light"
                : colorText,
            }}
          >
            {itm.name}
          </BtnWrapper>
        );
      })}
    </Stack>
  );
}

export default ButtonChoice;
