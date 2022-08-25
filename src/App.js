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
          <Route exact path="/" element={<Explore />} />
          <Route exact path="/falcon9" element={<Falcon9 />} />
          <Route exact path="/falcon-heavy" element={<FalconHeavy />} />
          <Route path="/dragon" element={<Dragon />} />
          <Route path="/starship" element={<StarShip />} />
          <Route path="/human-spaceflight" element={<HumanSpaceflight />} />
          <Route path="/rideshare" element={<Rideshare />} />
          <Route path="/starlink" element={<Starlink />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
