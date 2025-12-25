import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Services from "./components/Services"

// Temporary placeholder pages
const Placeholder = ({ title }) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white px-6 text-center font-grotesk">
    <h1 className="text-5xl md:text-6xl font-extrabold text-black uppercase tracking-tighter mb-4">
      {title}
    </h1>
    <p className="text-lg md:text-xl text-gray-500 uppercase tracking-widest font-medium">This page is under development.</p>
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