import shafina from "../assets/team/shafina.jpg";
{/* import najihah from "../assets/team/najihah.jpg";
import irdina from "../assets/team/irdina.jpg";
import farahM from "../assets/team/farahM.jpg";
import Pfarah from "../assets/team/Pfarah.jpg";
 */}

export default function Team() {
    const team = [
        { name: "Najihah", role: "CEO", photo: najihah },
        { name: "Farah M", role: "CTO", photo: farahM },
        { name: "Nurul Shafina Ashikin", role: "System Analyst", photo: shafina },
        { name: "Irdina", role: "Network and Security Specialist", photo: irdina },
        { name: "Putri Farah", role: "Software Developer", photo: Pfarah },
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
