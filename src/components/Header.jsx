import MobileMenu from "./MobileMenu";
import HamburgerMenu from "./HamburgerMenu";
import Navbar from "./Navbar";

function Header() {
  return (
    <>
      <MobileMenu />
      <header className="main-header">
        <div className="logo">
          <a href="/">
            <img src="./logo.png" alt="Mission to Mars" />
          </a>
        </div>
        <Navbar />
      </header>
      <HamburgerMenu />
    </>
  );
}

export default Header;
