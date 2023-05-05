import "./Header.scss";
import { FaGreaterThan, FaLessThan  } from 'react-icons/fa';

import cv from '../assets/pdf_20230227_020203_0000.pdf';

function Header() {

  return (
      <div class="container header">
        <a class="navbar-brand" href="/">WATERS</a>
          <ul class="header-list-cont">
            <li class="nav-item">
              <a class="nav-link-1" aria-current="page" href="https://github.com/OladunniWaters" target="_blank" rel="noreferrer"><FaLessThan />GITHUB<FaGreaterThan /></a>
            </li>
            <li class="nav-item">
              <a class="nav-link-2" href={cv}><FaLessThan />RESUME<FaGreaterThan /></a>
            </li>
          </ul>
      </div>
  );
}
export default Header;

