import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Services from "./pages/Services";
import Contact from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
import BookUs from "./pages/BookUs";

export default function App() {
  return (
    <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<BookUs />} />
        </Routes>
    </Router>
  );
}