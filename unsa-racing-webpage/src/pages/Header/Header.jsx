import './Header.css'

const Header = () => {
  return (
    <header className="headerDiv">
      {/* Logo */}
      <a href="/" className="logoLink">
        <img
          className="headerLogo"
          src="../src/assets/Header/logo.png"
          alt="Logo"
        />
      </a>

      {/* Navigacija */}
      <nav className="headerLinks">
        <a className="navLink">Home</a>
        <a className="navLink">News</a>
        <a className="navLink">Subteams</a>
        <a className="navLink">Sponsors</a>
      </nav>

    </header>
  )
}

export default Header
