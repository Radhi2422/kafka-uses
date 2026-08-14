import { useSelector } from "react-redux";
import { selectEmployeeId } from "../redux/employee/employeeSelector";

const useEmployee = ()=>{
 const employeeId = useSelector(selectEmployeeId);
 return {
    employeeId
 };
};
export default useEmployee;