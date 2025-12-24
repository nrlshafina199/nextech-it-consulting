// src/components/HomepageContent.jsx
import office from "../assets/team.png"; // Your team/office photo
import building from "../assets/building.jpg"; // Building image

export default function HomepageContent() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Building Image - Centered above the title */}
        <div className="mb-20 text-center">
          <img
            src={building}
            alt="NexTech Building / Futuristic City"
            className="max-w-full md:max-w-5xl lg:max-w-6xl mx-auto h-auto object-cover rounded-2xl shadow-2xl shadow-cyan-500/60 border-4 border-cyan-500/30"
          />
        </div>

        {/* Centered Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-center leading-tight mb-32">
          <span className="text-white">WE'RE PARTNER OF YOUR INNOVATIONS</span>
        </h2>

        {/* Main Grid: Text Left, Video Right - Much more space */}
        <div className="grid md:grid-cols-2 gap-20 md:gap-32 lg:gap-40 items-start">
          {/* Left: Text Content - All paragraphs in frames */}
          <div className="space-y-12">  {/* Increased vertical space between frames */}

              <p className="text-lg md:text-xl text-cyan-200 leading-relaxed italic text-center md:text-left">
                Welcome to NexTech IT Consulting, your trusted partner in navigating the dynamic landscape of IT consulting and software solutions.
              </p>

              <p className="text-lg md:text-xl text-cyan-200 leading-relaxed text-center md:text-left">
                Headquartered in the heart of Malaysia's tech ecosystem, NexTech is dedicated to empowering businesses with cutting-edge
              </p>

              <p className="text-lg md:text-xl text-cyan-200 leading-relaxed text-center md:text-left">
                  technologies including Cloud Integration, Cybersecurity, Artificial Intelligence, and Digital Transformation.
              </p>
              <p className="text-lg md:text-xl text-cyan-200 leading-relaxed text-center md:text-left">
                Our certified experts deliver futuristic solutions that optimize operations, enhance security, and drive sustainable growth for startups and enterprises alike.
              </p>
          </div>

          {/* Right: Company Video*/}
          <div className="flex justify-center pt-32 md:pt-20 lg:pt-32">
            <video
              controls
              className="max-w-full md:max-w-5xl lg:max-w-6xl mx-auto h-auto rounded-2xl shadow-2xl shadow-cyan-500/60 border-4 border-cyan-500/30"
            >
              <source src="/Video/companyVideo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-40">
          <h3
            className="text-4xl font-bold text-center text-cyan-400 mb-16"
            style={{ textShadow: "0 0 15px #00fff7" }}
          >
            Our Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-2xl border border-cyan-500/40 text-center">
              <h4 className="text-2xl font-bold text-cyan-300 mb-4">50+ Successful Projects</h4>
              <p className="text-gray-300">Delivered worldwide</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-2xl border border-purple-500/40 text-center">
              <h4 className="text-2xl font-bold text-cyan-300 mb-4">98% Client Satisfaction</h4>
              <p className="text-gray-300">Long-term partnerships</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-2xl border border-cyan-500/40 text-center">
              <h4 className="text-2xl font-bold text-cyan-300 mb-4">Certified Experts</h4>
              <p className="text-gray-300">Cloud, AI & Cybersecurity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}