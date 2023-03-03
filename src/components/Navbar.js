import "./Navbar.scss";
import {BsFillBrightnessHighFill, BsFillMoonFill} from "react-icons/bs";

function Navbar({changeTheme,  currentTheme}) {

  return (
   <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="/">DUNNEX</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/portfolio">Portfolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/skills">Skills</a>
              </li>
              <li class="nav-item">
                <a class="nav-link"  href="/about">About Me</a>
              </li>
            </ul>
            <ul class="contact_cont">
                <a class="contact-link"  href="/contact">Contact Me</a>
               <div class="toggle_cont" onClick={changeTheme}>
                    {currentTheme === "dark" ? <BsFillBrightnessHighFill /> :  <BsFillMoonFill />}
               </div>
            </ul>
          </div>
        </div>
   </nav>
  );
}
export default Navbar;

