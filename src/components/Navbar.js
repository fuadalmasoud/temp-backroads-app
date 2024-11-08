import logo from "../images/logo.svg";
import { pageLinks } from "../data";
import { socialLinks } from "../data";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <a href="#home">
            <img src={logo} className="nav-logo" alt="backroads" />
          </a>
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <a href={url} className="nav-link">
                  {text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            const { id, url, icon } = link;
            return (
              <li key={id}>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon">
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
