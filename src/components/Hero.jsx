import building from "../assets/building.jpg";

export default function Hero() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-12 py-24 bg-darkBg text-gray-100">
            <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in">
                <h1 className="text-6xl font-bold text-neonCyan mb-6">NexTech IT Consulting</h1>
                <p className="text-lg mb-6 text-gray-300">
                    Delivering futuristic IT solutions for businesses with neon-glow innovation and digital transformation.
                </p>
                <a href="#contact" className="bg-neonCyan text-darkBg px-6 py-3 rounded-lg hover:shadow-neonCyan hover:scale-105 transition-all">
                    Get in Touch
                </a>
            </div>
            <div className="md:w-1/2">
                <img src={building} alt="Office Building" className="rounded-xl shadow-lg shadow-neonCyan animate-pulse-slow"/>
            </div>
        </section>
    );
}
