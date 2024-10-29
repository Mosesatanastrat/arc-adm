import { createSlice } from "@reduxjs/toolkit";
import { InsertType } from "../types/insert.type";
import { RootState } from "../config/store/store";
import { getInsertOperationInitial } from "../common/constants/FormData";
import { randomId } from "../common/utils/random";

export interface InsertState {
  insertData: InsertType[];
  insertOperation: InsertType;
}

const initialState: InsertState = {
  insertData: [
    {
      id: "1",
      name: "PATFIRSTNAME",
      question: "Patient's First Name",
      insetType: "list",
      colorBackground: "#FFC107",
      colorText: "#FFC107",
      chartViewName: "Bar Chart",
      picture: null,
      markers: [],
      choices: [
        {
          id: "1",
          name: "one 1",
          random: [
            { id: "1", key: "Random", value: "Random 1 value" },
            { id: "2", key: "Random", value: "Random 2 value" },
          ],
        },
      ],
    },
  ],
  insertOperation: getInsertOperationInitial({
    choId: randomId(),
    randId: randomId(),
  }),
};

const insertSlice = createSlice({
  name: "insert",
  initialState,
  reducers: {
    handleInsertChange: (state, action) => {
      state.insertOperation = { ...state.insertOperation, ...action.payload };
    },
    addInsert: (state, action) => {
      state.insertData = [...state.insertData, action.payload];
    },
  },
});

export const selectInsert = (state: RootState) => state.insert;

export const { handleInsertChange, addInsert } = insertSlice.actions;
export default insertSlice.reducer;
