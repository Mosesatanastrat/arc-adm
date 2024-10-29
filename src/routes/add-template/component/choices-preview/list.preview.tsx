import { List, ListItem, ListItemText } from "@mui/material";
import { ChoicesType } from "../../../../types/insert.type";
import { toggleSelect } from "../../../../common/utils/common.fn";

type ListPreviewProps = {
  choices: ChoicesType[];
  previewSelect: string[];
  setPreviewSelect: React.Dispatch<React.SetStateAction<string[]>>;
};

function ListPreview({
  choices,
  previewSelect,
  setPreviewSelect,
}: ListPreviewProps) {
  const handleToggleSelect = (id: string) => {
    setPreviewSelect(toggleSelect(id, previewSelect));
  };
  return (
    <>
      <List dense sx={{ p: 0 }}>
        {choices.map((itm) => {
          const id = itm.id;
          return (
            <ListItem
              sx={{
                py: 0,
                px: 0.8,
                cursor: "pointer",
                backgroundColor: (theme) =>
                  previewSelect.includes(id)
                    ? theme.palette.primary.main
                    : "transparent",
              }}
              onClick={() => handleToggleSelect(itm.id)}
            >
              <ListItemText
                sx={{ wordWrap: "break-word" }}
                primary={itm.name}
              />
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

export default ListPreview;
