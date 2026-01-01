const najihah = "https://via.placeholder.com/150";
import irdina from "../assets/team/irdina.jpg";
const farahM = "https://via.placeholder.com/150";
const Pfarah = "https://via.placeholder.com/150";
import shafina from "../assets/team/shafina.jpg";

export default function Team() {
    const team = [
        { name: "Nur Najihah", role: "Chief Executive Officer (CEO)", photo: najihah, desc: "Leading NexTech's strategic vision and global partnerships." },
        { name: "Farah Mahnisa", role: "Chief Technology Officer (CTO)", photo: farahM, desc: "Driving technical innovation and software architecture." },
        { name: "Nurul Shafina Ashikin", role: "System Analyst", photo: shafina, desc: "Analyzing business requirements for digital solutions." },
        { name: "Nur Irdina", role: "Security Specialist", photo: irdina, desc: "Cybersecurity and infrastructure protection." },
        { name: "Putri Farah", role: "Developer", photo: Pfarah, desc: "Building modern and responsive web applications." },
    ];

    const styles = {
        container: {
            maxWidth: "1200px",
            margin: "80px auto",
            padding: "0 24px",
            fontFamily: "'Space Grotesk', sans-serif",
            textAlign: "center"
        },
        teamWrapper: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
            maxWidth: "1000px",
            margin: "0 auto"
        },
        memberCard: {
            flex: "0 1 calc(30% - 20px)",
            minWidth: "250px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "40px"
        },
        image: {
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "20px",
            border: "2px solid lightgray",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={{ fontSize: "32px", fontWeight: "800", marginBottom: "60px", color: "black" }}>
                Meet Our <span style={{ color: "gray" }}>Team</span>
            </h2>

            <div style={styles.teamWrapper}>
                {team.map((member, index) => (
                    <div key={index} style={styles.memberCard}>
                        <img
                            src={member.photo}
                            alt={member.name}
                            style={styles.image}
                        />
                        <h3 style={{ fontSize: "20px", fontWeight: "700", margin: "5px 0", color: "black" }}>
                            {member.name}
                        </h3>
                        <p style={{ color: "black", fontWeight: "600", fontSize: "14px", textTransform: "uppercase", marginBottom: "10px" }}>
                            {member.role}
                        </p>
                        <p style={{ color: "gray", fontSize: "14px", lineHeight: "1.4", maxWidth: "220px" }}>
                            {member.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}