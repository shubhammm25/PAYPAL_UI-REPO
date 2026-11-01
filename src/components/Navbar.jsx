import Logo from "./Logo.jsx";
import { navItems, authActions } from "../data.js";

function Chevron() {
  return (
    <svg className="chevron" viewBox="0 0 12 8" aria-hidden="true">
      <path d="M1 1.5l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-left">
          <a href="/" className="brand" aria-label="PayPal home">
            <Logo />
          </a>
          <nav className="menu" aria-label="Main">
            {navItems.map((item) => (
              <button key={item} type="button" className="menu-item">
                {item}
                <Chevron />
              </button>
            ))}
          </nav>
        </div>
        <div className="navbar-right">
          <button type="button" className="btn btn-light">
            {authActions.login}
          </button>
          <button type="button" className="btn btn-dark">
            {authActions.signup}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
