import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";
import Login from "./pages/Login/Login";
// import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/UserDashboard";
import LeaveRequest from "../src/pages/Leave/Leave"

function App(){
return(
<BrowserRouter>
<Routes>
<Route path="/" element={<Login/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
{/* Route for /leave/validate */}
<Route path="/leave/validate" element={<LeaveRequest/>}/>
{/* <Route path="/" element={<LeaveRequest/>}/> */}
</Routes>
</BrowserRouter>
)}
export default App;