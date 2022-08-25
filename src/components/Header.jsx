import logo from '../img/mars-logo.png';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Header() {
  return (
    <>
      <header className="main-header">
        <div className="logo">
          <a href="/mission-to-mars-fe">
            <img src={logo} alt="Mission to Mars" />
          </a>
          <span>Mission to Mars</span>
        </div>
        <Navbar />
      </header>
      <Sidebar outerContainerId={"outer-container"} />
    </>
  );
}

export default Header;
