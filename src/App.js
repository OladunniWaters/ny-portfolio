import Homepage from "./home/Homepage";
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
       <Navbar changeTheme={changeTheme}  currentTheme={theme}></Navbar> 
      <Routes>
        <Route path="/" element={<Homepage />} />
         <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
        <Footer />
    </HashRouter> 
    </div>
  );
}
export default App;


