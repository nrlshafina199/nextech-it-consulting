import React, { useState } from "react";

export default function Services() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const styles = {
        wrapper: {
            backgroundColor: "white",
            minHeight: "100vh",
            fontFamily: "'Space Grotesk', sans-serif",
            color: "black",
        },
        headerSection: {
            backgroundColor: "whitesmoke",
            padding: "60px 20px",
            borderBottom: "1px solid lightgray",
        },
        headerContainer: {
            maxWidth: "1000px",
            margin: "0 auto",
        },
        mainTitle: {
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: "300",
            color: "black",
            margin: "0",
        },
        accentBar: {
            width: "50px",
            height: "5px",
            backgroundColor: "black",
            marginTop: "24px",
        },
        listContainer: {
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "40px 20px",
        },
        serviceRow: {
            display: "flex",
            gap: "20px",
            padding: "30px 0",
            borderBottom: "1px solid whitesmoke",
            transition: "all 0.3s ease",
            cursor: "pointer",
        },
        numberIndicator: (isHovered) => ({
            fontSize: "14px",
            fontWeight: "900",
            color: isHovered ? "black" : "lightgray",
            paddingTop: "10px",
            minWidth: "30px",
            flexShrink: 0,
        }),
        titleNormal: {
            fontSize: "clamp(18px, 4vw, 26px)",
            fontWeight: "400",
            color: "darkgray",
            transition: "all 0.3s ease",
            marginBottom: "12px",
        },
        descNormal: {
            fontSize: "clamp(14px, 3vw, 18px)",
            color: "silver",
            lineHeight: "1.6",
            transition: "all 0.3s ease",
        },
        titleHover: {
            color: "black",
            fontWeight: "800"
        },
        descHover: {
            color: "dimgray",
        }
    };

    const services = [
        {
            title: "System Analysis & Problem Identification",
            desc: "We analyze our client's existing systems and business processes to identify technical issues and inefficiencies."
        },
        {
            title: "Technology Planning & Solution Design",
            desc: "We design and recommend appropriate IT solutions that align with our client's business objectives."
        },
        {
            title: "System Implementation & Management",
            desc: "We develop, implement and manage IT systems such as web applications and cloud platforms."
        },
        {
            title: "Maintenance, Support & Security",
            desc: "We provide continuous system maintenance, technical support and cybersecurity services."
        }
    ];

    return (
        <div style={styles.wrapper}>
            <section style={styles.headerSection}>
                <div style={styles.headerContainer}>
                    <h1 style={styles.mainTitle}>
                        <span style={{ fontWeight: "800" }}>What we do</span>
                    </h1>
                    <div style={styles.accentBar}></div>
                </div>
            </section>

            <main style={styles.listContainer}>
                {services.map((service, index) => {
                    const isHovered = hoveredIndex === index;

                    return (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={styles.serviceRow}
                        >
                            <div style={styles.numberIndicator(isHovered)}>
                                0{index + 1}
                            </div>

                            <div style={{ flex: 1 }}>
                                <h2 style={{
                                    ...styles.titleNormal,
                                    ...(isHovered ? styles.titleHover : {})
                                }}>
                                    {service.title}
                                </h2>
                                <p style={{
                                    ...styles.descNormal,
                                    ...(isHovered ? styles.descHover : {})
                                }}>
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </main>
        </div>
    );
}