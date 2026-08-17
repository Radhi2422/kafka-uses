import { useSelector } from "react-redux";
import { selectEmployeeId } from "../redux/employee/employeeSelector";

const useEmployee = ()=>{
 const employeeId = useSelector(selectEmployeeId);
// console.log("Reached",employeeId)
 return {
    employeeId
 };
};
export default useEmployee;