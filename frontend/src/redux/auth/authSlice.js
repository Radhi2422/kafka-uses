import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employeeId: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmployeeId: (state, action) => {
      state.employeeId = action.payload.employeeId;
    },

    logout: (state) => {
      state.employee = null;
    },
  },
});

export const { setEmployeeId, logout } = authSlice.actions;

export default authSlice.reducer;