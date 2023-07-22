import { Route, Routes } from "react-router-dom";
import "./App.css";
//import NavBar from "./components/NavBAr.jsx"
import NavBarr from "./components/NavBarr.jsx"
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import DashBoard from "./pages/DashBoard.jsx";
import SignUp from "./pages/SignUp.jsx"
function App() {
  return (
    <div>
        <NavBarr/>
       <Routes>
        <Route Path="/" element={<Home/>}/>
        <Route Path="/login" element={<Login/>}/>
        <Route Path="/SignUp" element={<SignUp/>}/>
        <Route Path="/dashboard" element={<DashBoard/>}/>


       </Routes>
    </div>
  );
}

export default App;
 