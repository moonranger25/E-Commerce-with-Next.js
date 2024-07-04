import { createSlice } from "@redux/toolkit";
import { IMegaMenuShow } from "../lib/types/megaMenu";

const initialState: IMegaMenuShow = {
  isMegaMenuOpen: false,
};

const megaMenuSlice = createSlice({
  name: "megaMenu",
  initialState,
  reducers: {
    openMegaMenu(state: { isMegaMenuOpen: boolean }) {
      state.isMegaMenuOpen = true;
    },
    closeMegaMenu(state: { isMegaMenuOpen: boolean }) {
      state.isMegaMenuOpen = false;
    },
  },
});

export const megaMenuActions = megaMenuSlice.actions;

export default megaMenuSlice.reducer;
