import React from 'react';
import cityscape from "../assets/IT CONSULTANT.png";

export default function Hero() {
    return (
        <>
            {/* 1. Image Banner at the Top */}
            <section style={{ width: "100%", backgroundColor: "white" }}>
                <img
                    src={cityscape}
                    alt="NexTech IT Consulting Banner"
                    style={{
                        width: "100%",
                        height: "320px", // Professional banner height
                        objectFit: "cover",
                        filter: "grayscale(100%) contrast(1.1)",
                        display: "block"
                    }}
                />
                <div style={{ borderBottom: "1px solid whitesmoke" }}></div>
            </section>

            {/* 2. Compact Text Section */}
            <section
                style={{
                    backgroundColor: "white",
                    padding: "30px 24px",
                    textAlign: "center"
                }}
            >
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    {/* Main Title - Permanently Bold, No Hover */}
                    <h1
                        style={{
                            fontSize: "28px",
                            fontWeight: "800", // Kept bold
                            color: "black",
                            marginBottom: "10px",
                            letterSpacing: "-1px",
                            textTransform: "none"
                        }}
                    >
                        NexTech IT Consulting
                    </h1>

                    {/* Tagline - Smaller and clean */}
                    <p
                        style={{
                            fontSize: "15px",
                            fontWeight: "400",
                            color: "silver",
                            fontStyle: "italic",
                            lineHeight: "1.5",
                            maxWidth: "500px",
                            margin: "0 auto"
                        }}
                    >
                        Delivering futuristic IT solutions for businesses through <span style={{ color: "dimgray" }}>innovation</span> and <span style={{ color: "dimgray" }}>digital transformation</span>
                    </p>
                </div>
            </section>

            {/* Thin divider to transition into HomepageContent */}
            <div style={{ maxWidth: "1000px", margin: "0 auto", borderBottom: "1px solid whitesmoke" }}></div>
        </>
    );
}