import { createSlice } from "@reduxjs/toolkit";

const storedEmployee = localStorage.getItem("StoredEmployee");
console.log("storedEmployee", storedEmployee);
const initialState = {employee: storedEmployee?JSON.stringify(storedEmployee): null };

const employeeSlice = createSlice({
  name: "employee",
  initialState,

  reducers: {
    setEmployee: (state, action) => {
      state.employee = action.payload;
      localStorage.setItem(
        "employee",
        JSON.stringify(action.payload)
      );
    },
    clearEmployee: (state) => {
      state.employee = null;
      localStorage.removeItem("employee");
      localStorage.removeItem("token");
    }
  }
});

export const { setEmployee, clearEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;