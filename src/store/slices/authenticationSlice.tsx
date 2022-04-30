import { createSlice } from "@reduxjs/toolkit";
import { BOOLEAN_FALSE, BOOLEAN_TRUE } from "../../constants/authConstants";

import { initialStateModel } from "../../models/authModel";

const initialAuthState: initialStateModel = {
  isAuthenticated: BOOLEAN_FALSE,
  message: "",
  remarks: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = BOOLEAN_TRUE;
    },
    logout(state) {
      state.isAuthenticated = BOOLEAN_FALSE;
    },
  },
});

// export function actions
export const authActions = authSlice.actions;

// export reducer for store
export default authSlice.reducer;
