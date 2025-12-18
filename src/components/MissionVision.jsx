export default function MissionVision() {
    return (
        <section id="mission-vision" className="px-12 py-20 bg-darkBg text-gray-100">
            <h2 className="text-4xl font-bold mb-12 text-neonPurple animate-fade-in">Mission & Vision</h2>
            <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-neonCyan transition transform hover:-translate-y-2">
                    <h3 className="text-xl font-bold mb-4 text-neonCyan">Mission</h3>
                    <p>To deliver innovative IT solutions that empower businesses to thrive in a digital-first world.</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-neonPink transition transform hover:-translate-y-2">
                    <h3 className="text-xl font-bold mb-4 text-neonCyan">Vision</h3>
                    <p>To be the leading futuristic IT consulting company recognized for cutting-edge technology and exceptional client success.</p>
                </div>
            </div>
        </section>
    );
}
