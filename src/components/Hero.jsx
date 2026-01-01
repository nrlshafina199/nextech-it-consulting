import React from 'react';

export default function Hero() {
    return (
        <>
            <section style={{ width: "100%", backgroundColor: "white" }}>
                <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200"
                    alt="NexTech IT Consulting Banner"
                    style={{
                        width: "100%",
                        height: "clamp(200px, 40vw, 320px)",
                        objectFit: "cover",
                        filter: "grayscale(100%) contrast(1.1)",
                        display: "block"
                    }}
                />
                <div style={{ borderBottom: "1px solid whitesmoke" }}></div>
            </section>

            <section
                style={{
                    backgroundColor: "white",
                    padding: "30px 20px",
                    textAlign: "center"
                }}
            >
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <h1
                        style={{
                            fontSize: "clamp(22px, 5vw, 28px)",
                            fontWeight: "800",
                            color: "black",
                            marginBottom: "10px",
                            letterSpacing: "-1px",
                            textTransform: "none"
                        }}
                    >
                        NexTech IT Consulting
                    </h1>

                    <p
                        style={{
                            fontSize: "clamp(13px, 3vw, 15px)",
                            fontWeight: "400",
                            color: "silver",
                            fontStyle: "italic",
                            lineHeight: "1.5",
                            maxWidth: "500px",
                            margin: "0 auto",
                            padding: "0 10px"
                        }}
                    >
                        Delivering futuristic IT solutions for businesses through <span style={{ color: "dimgray" }}>innovation</span> and <span style={{ color: "dimgray" }}>digital transformation</span>
                    </p>
                </div>
            </section>

            <div style={{ maxWidth: "1000px", margin: "0 auto", borderBottom: "1px solid whitesmoke" }}></div>
        </>
    );
}