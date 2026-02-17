import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Career from "./pages/Career";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Inspiration from "./pages/Inspiration";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F58B57] text-black font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/career" element={<Career />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/inspiration" element={<Inspiration />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
