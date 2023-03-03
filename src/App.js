import Homepage from "./home/Homepage";
import Navbar from './components/Navbar'
//import "./App.css";
import {BrowserRouter as HashRouter, Routes, Route} from "react-router-dom";
import {useState} from "react";

function App() {
    const [theme, setTheme] = useState("dark")
    const changeTheme = () =>{
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }
  
  return (
    <div className="app" data-theme={theme}>
    <HashRouter>
       <Navbar changeTheme={changeTheme} currentTheme={theme}></Navbar> 
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </HashRouter> 
    </div>
  );
}
export default App;


