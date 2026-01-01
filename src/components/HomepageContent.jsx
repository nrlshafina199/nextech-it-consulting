import React, { useState } from 'react';
import building from "../assets/building.jpg";

export default function HomepageContent() {
    const [hoverIndex, setHoverIndex] = useState(null);

    const cardStyle = (isHovered) => ({
        padding: "30px 20px",
        borderBottom: "1px solid whitesmoke",
        transition: "all 0.3s ease",
        flex: "1",
        textAlign: "center",
        minWidth: "250px"
    });

    const titleStyle = (isHovered) => ({
        fontSize: "clamp(18px, 4vw, 24px)",
        fontWeight: isHovered ? "800" : "400",
        color: isHovered ? "black" : "darkgray",
        transition: "all 0.3s ease"
    });

    const subTextStyle = (isHovered) => ({
        color: isHovered ? "dimgray" : "silver",
        marginTop: "15px",
        transition: "all 0.3s ease",
        fontSize: "clamp(14px, 3vw, 16px)"
    });

    return (
        <section style={{ backgroundColor: "white", padding: "40px 20px", fontFamily: "sans-serif" }}>
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

                <div style={{ marginBottom: "40px", textAlign: "center" }}>
                    <img
                        src={building}
                        alt="NexTech Building"
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            minHeight: "200px",
                            maxHeight: "300px",
                            width: "100%",
                            objectFit: "cover",
                            borderRadius: "4px",
                            borderBottom: "1px solid whitesmoke"
                        }}
                    />
                </div>

                <div style={{ marginBottom: "60px" }}>
                    <h2 style={{
                        fontSize: "clamp(20px, 5vw, 28px)",
                        fontWeight: "800",
                        color: "black",
                        textAlign: "center",
                        lineHeight: "1.4",
                        marginBottom: "30px",
                        padding: "0 10px"
                    }}>
                        Welcome to NexTech IT Consulting, your trusted partner in navigating the dynamic landscape of IT consulting and software solutions.
                    </h2>

                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "30px",
                        borderTop: "1px solid whitesmoke",
                        paddingTop: "30px"
                    }}>
                        <div>
                            <p style={{
                                color: "dimgray",
                                fontSize: "clamp(15px, 3vw, 17px)",
                                lineHeight: "1.8",
                                textAlign: "center"
                            }}>
                                Headquartered in the heart of Malaysia's tech ecosystem, NexTech is dedicated to empowering businesses with cutting-edge technologies including <span style={{ color: "black", fontWeight: "600" }}>Cloud Integration, Cybersecurity, Artificial Intelligence, and Digital Transformation.</span>
                            </p>
                        </div>
                        <div>
                            <p style={{
                                color: "dimgray",
                                fontSize: "clamp(15px, 3vw, 17px)",
                                lineHeight: "1.8",
                                textAlign: "center"
                            }}>
                                Our certified experts deliver futuristic solutions that optimize operations, enhance security, and drive sustainable growth for startups and enterprises alike.
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: "1px solid whitesmoke", padding: "40px 0", textAlign: "center" }}>
                    <video
                        controls
                        style={{
                            maxWidth: "100%",
                            width: "100%",
                            height: "auto",
                            borderRadius: "4px",
                            border: "1px solid whitesmoke",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
                        }}
                    >
                        <source src="/Video/companyVideo.mp4" type="video/mp4" />
                    </video>
                </div>

                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    borderTop: "1px solid whitesmoke",
                    justifyContent: "center"
                }}>
                    <div
                        onMouseEnter={() => setHoverIndex(0)}
                        onMouseLeave={() => setHoverIndex(null)}
                        style={cardStyle(hoverIndex === 0)}
                    >
                        <h4 style={titleStyle(hoverIndex === 0)}>50+ Successful Projects</h4>
                        <p style={subTextStyle(hoverIndex === 0)}>Delivered worldwide</p>
                    </div>

                    <div
                        onMouseEnter={() => setHoverIndex(1)}
                        onMouseLeave={() => setHoverIndex(null)}
                        style={cardStyle(hoverIndex === 1)}
                    >
                        <h4 style={titleStyle(hoverIndex === 1)}>98% Client Satisfaction</h4>
                        <p style={subTextStyle(hoverIndex === 1)}>Long-term partnerships</p>
                    </div>

                    <div
                        onMouseEnter={() => setHoverIndex(2)}
                        onMouseLeave={() => setHoverIndex(null)}
                        style={cardStyle(hoverIndex === 2)}
                    >
                        <h4 style={titleStyle(hoverIndex === 2)}>Certified Experts</h4>
                        <p style={subTextStyle(hoverIndex === 2)}>Cloud, AI & Cybersecurity</p>
                    </div>
                </div>

            </div>
        </section>
    );
}