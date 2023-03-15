import "./Navbar.scss";
import { HiMenuAlt2 } from 'react-icons/hi';

function Navbar() {

  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="/">Oladunni</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <HiMenuAlt2 className='navbar-icon' />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href='/contact'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

