//import Home from './component/Home';
import Home from './home/Homepage';
import Header from './component/Header';
import Footer from './component/Footer';
//import "./App.css";
import {BrowserRouter as HashRouter, Routes, Route} from "react-router-dom";
import  {useState} from 'react';

function App() {
    const [theme, setTheme] = useState("dark")
    const changeTheme = () =>{
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }
  
  return (
    <div className="app" data-theme={theme}>
    <HashRouter>
       <Header changeTheme={changeTheme}  currentTheme={theme}></Header> 
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
        <Footer />
    </HashRouter> 
    </div>
  );
}
export default App;


