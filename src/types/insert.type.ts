import { MarkerAxisType, SelectListItemType } from "./common.type";

export enum SelectInsetType {
  AUTOMATIC = "automatic",
  DATA_FROM_SYSTEM = "dataFromSystem",
  LIST = "list",
  CHECKBOX = "checkbox",
  BUTTONS = "buttons",
  DROPDOWN = "dropdown",
  PICTURE = "picture",
  FORMULA = "formula",
  RADIO = "radio",
}

export type RandomType = {
  id: string;
  key: string;
  value: string;
};

export type ChoicesType = {
  id: string;
  name: string;
  random: RandomType[];
};

export type InsetType = Partial<SelectInsetType>;

export type InsertType = {
  id: string;
  name: string;
  question: string;
  insetType: InsetType;
  colorBackground: string;
  colorText: string;
  choices: ChoicesType[];
  chartViewName: string;
  picture: SelectListItemType | null;
  markers: MarkerAxisType[];
};

export type ContentType = {
  id: string;
  value: string;
};

export type ChoAndRandId = {
  choId: string;
  randId: string;
};
