// src/components/Hero.jsx
import cityscape from "../assets/img.png";  // Your city image

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
      <section className="bg-black px-6 py-16 md:py-20">  {/* py-16 ≈ 1-1.5 inch, py-20 for larger screens */}
        <div className="container mx-auto max-w-5xl text-center">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-cyan-400 mb-6 tracking-wider"
            style={{ textShadow: "0 0 30px #00fff7, 0 0 60px #b300ff" }}
          >
            NexTech IT Consulting
          </h1>

          <p
            className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto"
            style={{ textShadow: "0 0 15px #00ffff, 0 0 30px #a100ff" }}
          >
            Delivering futuristic IT solutions for businesses with neon-glow innovation and digital transformation.
          </p>
        </div>
      </section>

    </>
  );
}