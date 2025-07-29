import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./interface/home/home";
import Footer from "./components/footer/footer";
import About from "./interface/about/about";
import Contact from "./interface/contact/contact";
import Services from "./interface/services/services";
import TopButton from "./components/top-button/top-button";
import ConstructionHouse from "./interface/services/01construction-house";
import ReconstBuild from "./interface/services/02reconst-build";
import LowRise from "./interface/services/03low-rise";
import Prefabricated from "./interface/services/04prefabricated";
import CivilWorks from "./interface/services/05civil-works";
import OfficeRenovation from "./interface/services/06office-renovation";
import FinishWork from "./interface/services/07finish-work";
import FacadeWork from "./interface/services/08facade-work";
import Waterproofing from "./interface/services/09waterproofing";
import Improvement from "./interface/services/10improvement";

function App() {
  return (
    <main>
      <Navbar />
      <div className="overflow-x-hidden app mt-[88px] min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/construction-house" element={<ConstructionHouse />} />
          <Route path="/reconst-build" element={<ReconstBuild />} />
          <Route path="/low-rise" element={<LowRise />} />
          <Route path="/prefabricated" element={<Prefabricated />} />
          <Route path="/civil-works" element={<CivilWorks />} />
          <Route path="/office-renovation" element={<OfficeRenovation />} />
          <Route path="/finish-work" element={<FinishWork />} />
          <Route path="/facade-work" element={<FacadeWork />} />
          <Route path="/waterproofing" element={<Waterproofing />} />
          <Route path="/improvement" element={<Improvement />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
      <Footer />
      <TopButton />
    </main>
  );
}

export default App;
