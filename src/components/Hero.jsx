// src/components/Hero.jsx
import cityscape from "../assets/organization_logo.jpg";  // Your city image

export default function Hero() {
  return (
    <>
      {/* Cityscape Image - Full width, directly below text */}
      <section className="w-full">
        <img
          src={cityscape}
          alt="Futuristic Cityscape"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Hero Text Section - Top, close to navbar */}
      <section className="bg-black px-6 py-16 md:py-20">
        <div className="container mx-auto max-w-5xl text-center">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-cyan-400 mb-8 tracking-wider"
            style={{ textShadow: "0 0 30px #ff99ff, 0 0 60px #ff99ff" }}
          >
            NexTech IT Consulting
          </h1>

          {/* Cuter tagline */}
          <p
            className="text-xl md:text-2xl lg:text-3xl font-medium text-cyan-300 italic tracking-wide leading-relaxed max-w-5xl mx-auto"
            style={{
              textShadow: "0 0 20px #ff99ff, 0 0 40px #ff99ff",
              letterSpacing: "0.05 em",
            }}
          >
            Delivering futuristic IT solutions for businesses with neon-glow innovation and digital transformation
          </p>
        </div>
      </section>
    </>
  );
}