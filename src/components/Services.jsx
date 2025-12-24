import React, { useState } from "react";

export default function Services() {
    // Track which item is hovered
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
            padding: "100px 24px",
            borderBottom: "1px solid lightgray",
        },
        headerContainer: {
            maxWidth: "1000px",
            margin: "0 auto",
        },
        mainTitle: {
            fontSize: "48px",
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
            padding: "60px 24px",
        },
        serviceRow: {
            display: "flex",
            gap: "40px",
            padding: "50px 0",
            borderBottom: "1px solid whitesmoke",
            transition: "all 0.3s ease",
            cursor: "pointer",
        },
        // TEXT COLORS - NORMAL STATE
        titleNormal: {
            fontSize: "26px",
            fontWeight: "400",
            color: "darkgray", // Light gray family
            transition: "all 0.3s ease",
            marginBottom: "12px",
        },
        descNormal: {
            fontSize: "18px",
            color: "silver", // Even lighter gray
            lineHeight: "1.6",
            transition: "all 0.3s ease",
        },
        // TEXT COLORS - HOVER STATE
        titleHover: {
            color: "black",
            fontWeight: "800", // Makes the text bold
        },
        descHover: {
            color: "dimgray", // Darker gray for readability on hover
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
            {/* Page Header */}
            <section style={styles.headerSection}>
                <div style={styles.headerContainer}>
                    <h1 style={styles.mainTitle}>
                        <span style={{ fontWeight: "800" }}>What we do</span>
                    </h1>
                    <div style={styles.accentBar}></div>
                </div>
            </section>

            {/* Services List */}
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
                            {/* Vertical Number Indicator */}
                            <div style={{
                                fontSize: "14px",
                                fontWeight: "900",
                                color: isHovered ? "black" : "lightgray",
                                paddingTop: "10px"
                            }}>
                                0{index + 1}
                            </div>

                            <div>
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