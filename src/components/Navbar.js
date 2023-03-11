import "./Navbar.scss";
import {BsFillBrightnessHighFill, BsFillMoonFill} from "react-icons/bs";

function Navbar({changeTheme,  currentTheme}) {

  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
          <div class="toggle_cont" onClick={changeTheme}>
                    {currentTheme === "dark" ? <BsFillBrightnessHighFill class='toggle_icon'/> :  <BsFillMoonFill class='toggle_icon'/>}
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

