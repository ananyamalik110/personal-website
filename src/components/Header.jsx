import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="logo">
          Ananya Malik
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/case-studies" className={location.pathname === '/case-studies' ? 'active' : ''}>
              Case Studies
            </Link>
          </li>
          <li>
            <Link to="/publications" className={location.pathname === '/publications' ? 'active' : ''}>
              Publications
            </Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
