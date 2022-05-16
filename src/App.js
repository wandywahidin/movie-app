import Home from "./pages/Home";
import {Routes, Route} from 'react-router-dom'
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<SignUp/>}/>
    </Routes>
    </>
  );
}

export default App;
