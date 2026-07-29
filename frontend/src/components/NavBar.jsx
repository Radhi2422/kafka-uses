import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {
 clearEmployee
} from "../redux/employee/employeeSlice";


function Navbar(){


const dispatch=useDispatch();
const navigate=useNavigate();



const logout=()=>{

dispatch(clearEmployee());

navigate("/");

};



return(

<nav>

<h3>
Employee Portal
</h3>


<button onClick={logout}>
Logout
</button>


</nav>

);


}


export default Navbar;