// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";  // ← Added this import
import Home from "./components/Home";
import Services from "./components/Services"

// Temporary placeholder pages
const Placeholder = ({ title }) => (
  <div className="container mx-auto px-6 py-20 text-center">
    <h1 className="text-5xl font-bold text-cyan-400 mb-8" style={{ textShadow: "0 0 15px #00fff7" }}>
      {title}
    </h1>
    <p className="text-xl text-gray-300">This page is under development.</p>
  </div>
);

export default function App() {
  return (
    <>
      <Navbar />

      {/* Main content */}
        <main className="min-h-screen" style={{ paddingTop: "90px", backgroundColor: "white" }}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Placeholder title="About Us" />} />
                <Route path="/services" element={<Services />} />
                <Route path="/faqs" element={<Placeholder title="FAQs" />} />
                <Route path="/contact" element={<Placeholder title="Contact Us" />} />
            </Routes>
        </main>

      <Footer />
    </>
  );
}