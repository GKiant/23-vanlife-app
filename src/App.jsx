import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/">#VANLIFE</Link>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
