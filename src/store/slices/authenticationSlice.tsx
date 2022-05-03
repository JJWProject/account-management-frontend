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
    login(state, action) {
      sessionStorage.setItem("token", action.payload)
      state.isAuthenticated = BOOLEAN_TRUE;
    },
    logout(state) {
      sessionStorage.removeItem('token');
      state.isAuthenticated = BOOLEAN_FALSE;
    },
  },
});

// export function actions
export const authActions = authSlice.actions;

// export reducer for store
export default authSlice.reducer;
