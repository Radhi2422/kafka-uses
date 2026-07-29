import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../redux/employee/employeeSlice";

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});