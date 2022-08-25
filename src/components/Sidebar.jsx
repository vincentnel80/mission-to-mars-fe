import { fallDown as Menu } from "react-burger-menu";
//import "./Sidebar.css";

const Sidebar = () => {
  return (
    <Menu right>
      <a className="mobile-only" href="/">
        Home
      </a>
      <a className="mobile-only" href="/Falcon9">
        Falcon 9
      </a>
      <a className="mobile-only" href="/falcon-heavy">
        Falcon Heavy
      </a>
      <a className="mobile-only" href="/dragon">
        Dragon
      </a>
      {/* <a className="mobile-only" href="#">
        Starship
      </a>
      <a className="mobile-only" href="#">
        Human Spaceflight
      </a>
      <a className="mobile-only" href="#">
        Rideshare
      </a>
      <a className="mobile-only" href="#">
        Starlink
      </a> */}
    </Menu>
  );
};

export default Sidebar;
