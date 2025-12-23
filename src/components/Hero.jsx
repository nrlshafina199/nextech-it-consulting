// src/components/Hero.jsx
import cityscape from "../assets/building.jpg";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center pt-28">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={cityscape}
          alt="Futuristic Cityscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent"></div>
      </div>

      {/* Hero Text */}
      <div className="text-center px-6 max-w-5xl">
        <h1
          className="text-5xl md:text-7xl font-bold text-cyan-400 mb-6 tracking-wider"
          style={{ textShadow: "0 0 30px #00fff7, 0 0 60px #b300ff" }}
        >
          NexTech IT Consulting
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
          Delivering futuristic IT solutions for businesses with neon-glow innovation
          and digital transformation.
        </p>
      </div>
    </section>
  );
}
