export const selectEmployee = (state) =>
  state.employee.employee;


export const selectEmployeeId = (state) =>
  state.employee.employee?.employeeId;


export const selectRole = (state) =>
  state.employee.employee?.role;