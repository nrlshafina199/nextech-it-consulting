export default function Services() {
    const services = [
        "IT Consulting",
        "Web & Mobile Development",
        "Cloud Solutions",
        "Cybersecurity",
        "IoT Integration",
    ];

    return (
        <section id="services" className="px-12 py-20 bg-darkBg text-gray-100">
            <h2 className="text-4xl font-bold mb-10 text-neonCyan animate-fade-in">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {services.map(service => (
                    <div key={service} className="p-6 bg-gray-900 rounded-xl shadow-lg hover:shadow-neonPurple hover:scale-105 transition cursor-pointer">
                        <h3 className="text-xl font-bold text-neonCyan mb-2">{service}</h3>
                        <p>Cutting-edge solutions for futuristic business growth.</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
