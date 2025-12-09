import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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

  return (
    <header className={`headerDiv ${isScrolled ? 'scrolled' : ''}`}>
      {/* Logo */}
      <Link to="/" className="logoLink">
        <img
          className="headerLogo"
          src="../src/assets/Header/logo.png"
          alt="Logo"
        />
      </Link>

      {/* Navigacija */}
      <nav className="headerLinks">
        <Link to="/" className={`navLink ${isActive('/') ? 'active' : ''}`}>Home</Link>
        <Link to="/news" className={`navLink ${isActive('/news') ? 'active' : ''}`}>News</Link>
        <Link to="/subteams" className={`navLink ${isActive('/subteams') ? 'active' : ''}`}>Subteams</Link>
        <Link to="/sponsors" className={`navLink ${isActive('/sponsors') ? 'active' : ''}`}>Sponsors</Link>
      </nav>
      
    </header>
  )
}

export default Header
