import { configureStore } from "@reduxjs/toolkit";
// import employeeReducer from "../redux/employee/employeeSlice";
import authReducer from "../redux/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});