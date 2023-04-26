import "./Header.scss";



function Header() {

  return (
      <div class="container header">
        <a class="navbar-brand" href="/">WATERS</a>
          <ul class="header-list-cont">
            <li class="nav-item">
              <a class="nav-link-1" aria-current="page" href="/about">Github</a>
            </li>
            <li class="nav-item">
              <a class="nav-link-2" href='/contact'>Resume</a>
            </li>
          </ul>
      </div>
  );
}
export default Header;

