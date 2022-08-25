import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dragon from "./pages/Dragon";
import Explore from "./pages/Explore";
import HumanSpaceflight from "./pages/HumanSpaceflight";
import Falcon9 from "./pages/Falcon9";
import FalconHeavy from "./pages/FalconHeavy";
import StarShip from "./pages/StarShip";
import Rideshare from "./pages/Rideshare";
import Starlink from "./pages/Starlink";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* <Route exact path="/" element={<Explore />} />*/}
          <Route path="/mission-to-mars-fe" element={<Explore />} />
          <Route path="/mission-to-mars-fe/falcon9" element={<Falcon9 />} />
          <Route path="/mission-to-mars-fe/falcon-heavy" element={<FalconHeavy />} />
          <Route path="/mission-to-mars-fe/dragon" element={<Dragon />} />
          <Route path="/mission-to-mars-fe/starship" element={<StarShip />} />
          <Route path="/mission-to-mars-fe/human-spaceflight" element={<HumanSpaceflight />} />
          <Route path="/mission-to-mars-fe/rideshare" element={<Rideshare />} />
          <Route path="/mission-to-mars-fe/starlink" element={<Starlink />} />
          <Route path="/mission-to-mars-fe/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
