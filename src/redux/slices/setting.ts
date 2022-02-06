import { createSlice } from "@reduxjs/toolkit";

// ----------------------------------------------------------------------

type SettingState = {
  setting: string;
};

const initialState: SettingState = {
  setting: "",
};

const slice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setSetting(state, action: { payload }) {
      state.setting = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { setSetting } = slice.actions;
