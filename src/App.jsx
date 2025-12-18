import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MissionVision from "./components/MissionVision";
import Services from "./components/Services";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <MissionVision />
            <Services />
            <Team />
            <Contact />
            <Footer />
        </>
    );
}