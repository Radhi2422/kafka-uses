import { useSelector } from "react-redux";
import {
 selectEmployee,
 selectEmployeeId
} from "../redux/employee/employeeSelector";


const useEmployee = ()=>{


 const employee =
 useSelector(selectEmployee);


 const employeeId =
 useSelector(selectEmployeeId);


 return {
    employee,
    employeeId
 };


};


export default useEmployee;