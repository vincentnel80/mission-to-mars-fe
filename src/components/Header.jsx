import MobileMenu from './MobileMenu'
import HamburgerMenu from './HamburgerMenu'
import Navbar from './Navbar'

function Header() {

  return (
    <>
        <MobileMenu />
        <header className="main-header">
            <div className="logo">
                <a href="index.html">
                    <img src="../img/logo.png" alt="SpaceX" />
                </a>
            </div>
            <Navbar />
        </header>
        <HamburgerMenu />
    </>
  )
}

export default Header