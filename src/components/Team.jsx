import shafina from "../assets/team/shafina.jpg";

export default function Team() {
    const team = [
        { name: "Nurul Shafina", role: "IT Consultant", photo: shafina },
    ];

    return (
        <section id="team" className="px-12 py-20 bg-gray-800 text-gray-100">
            <h2 className="text-4xl font-bold mb-10 text-neonPink animate-fade-in">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {team.map(member => (
                    <div key={member.name} className="text-center p-4 rounded-xl bg-gray-900 hover:shadow-neonCyan transition transform hover:-translate-y-2">
                        <img src={member.photo} alt={member.name} className="w-32 h-32 mx-auto rounded-full mb-4 object-cover border-2 border-neonCyan"/>
                        <h3 className="font-semibold text-lg">{member.name}</h3>
                        <p className="text-gray-300">{member.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
