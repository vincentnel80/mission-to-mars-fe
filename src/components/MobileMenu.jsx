function MobileMenu() {
  return (
    <div id="mobile-menu" className="mobile-main-menu">
        <ul>
            <li><a href="#">Mission</a></li>
            <li><a href="#">Launches</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Updates</a></li>
            <li><a href="#">Shop</a></li>

            <li className="mobile-only"><a href="falcon9.html">Falcon 9</a></li>
            <li className="mobile-only">
            <a href="falcon-heavy.html">Falcon Heavy</a>
            </li>
            <li className="mobile-only"><a href="dragon.html">Dragon</a></li>
            <li className="mobile-only"><a href="#">Starship</a></li>
            <li className="mobile-only"><a href="#">Human Spaceflight</a></li>
            <li className="mobile-only"><a href="#">Rideshare</a></li>
            <li className="mobile-only"><a href="#">Starlink</a></li>
        </ul>
    </div>
  )
}

export default MobileMenu