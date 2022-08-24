import { useState, useEffect } from 'react'

function Offers() {

  const [scrollDir, setScrollDir] = useState("scrolling down");

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;
  
    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
  
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };
  
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };
  
    window.addEventListener("scroll", onScroll);
    console.log(scrollDir);
  
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);
  
    return (
      <>
        <section className="section-animate bg-falcon-9"></section>
        <div className="section-inner-center">
          <h3>Falcon 9</h3>
          <p>First orbital class rocket capable of reflight</p>
        </div>

        <div className="stats">
          <div>
          <span className="counter" data-target="3">0</span>
          <h4>Total Launches</h4>
          </div>
          <div>
            <span className="counter" data-target="7">0</span>
            <h4>Total Landings</h4>
          </div>
          <div>
            <span className="counter" data-target="4">0</span>
            <h4>Total Reflights</h4>
        </div>
        </div>
      </>
    )
  }
  
  export default Offers