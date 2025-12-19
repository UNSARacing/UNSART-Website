import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/Header/logo.png'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled down more than 50px
      const scrollPosition = window.scrollY || window.pageYOffset;
      setIsScrolled(scrollPosition > 50);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Check initial scroll position
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`headerDiv ${isScrolled ? 'scrolled' : ''} ${location.pathname === '/' ? 'is-home' : ''}`}>
      {/* Logo */}
      <Link to="/" className="logoLink" onClick={closeMenu}>
        <img
          className="headerLogo"
          src={logo}
          alt="Logo"
        />
      </Link>

      {/* Hamburger Menu Icon */}
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navigacija */}
      <nav className={`headerLinks ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" className={`navLink ${isActive('/') ? 'active' : ''}`} onClick={closeMenu}>Home</Link>
        <Link to="/news" className={`navLink ${isActive('/news') ? 'active' : ''}`} onClick={closeMenu}>News</Link>
        <Link to="/our-team" className={`navLink ${isActive('/our-team') ? 'active' : ''}`} onClick={closeMenu}>Our Team</Link>
        <Link to="/sponsors" className={`navLink ${isActive('/sponsors') ? 'active' : ''}`} onClick={closeMenu}>Sponsors</Link>
      </nav>
      
    </header>
  )
}

export default Header
