import { ChoicesType, ContentType } from "../../types/insert.type";
import { getRandomInt } from "./random";

export const getSelectContent = ({
  choices,
  previewSelect,
  selectedContent,
}: {
  choices: ChoicesType[];
  previewSelect: string[];
  selectedContent: ContentType[];
}) => {
  const content: ContentType[] = [];
  const selectMap = new Map();
  for (const item of previewSelect) {
    selectMap.set(item, item);
  }

  for (const cho of choices) {
    const id = cho.id;
    const isCho = selectMap.has(id);
    if (!isCho) continue;
    const select = selectedContent.find((select) => select.id == id);
    if (select) {
      content.push(select);
    } else {
      const random = cho.random;
      const randomLn = random.length;
      const randomNum = getRandomInt(randomLn);
      const value = cho.random[randomNum].value;
      content.push({
        id,
        value,
      });
    }
  }
  return content;
};

export const toggleSelect = (id: string, previewSelect: string[]) => {
  const isInclude = previewSelect.includes(id);
  if (isInclude) return previewSelect.filter((itm) => itm !== id);
  else return [...previewSelect, id];
};

export const createSelectPreviewOption = (choices: ChoicesType[]) => {
  return choices.map((cho) => {
    return {
      ...cho,
      label: cho.name,
      value: cho.id,
    };
  });
};
