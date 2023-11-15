import { createSlice } from "@reduxjs/toolkit";

export const loginLogout = createSlice({
  name: "loginLogout",
  initialState: {
    loggedIn: false,
  },
  reducers: {
    login: (state) => {
      state.loggedIn = true;
    },
    logout: (state) => {
      state.loggedIn = false;
    },
  },
});

export const { login, logout } = loginLogout.actions;
export default loginLogout.reducer;
