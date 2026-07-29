import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";
import Login from "./pages/Login/Login";


// import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/UserDashboard";

function App(){
return(
<BrowserRouter>
<Routes>
<Route path="/" element={<Login/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
</Routes>
</BrowserRouter>
)}
export default App;
