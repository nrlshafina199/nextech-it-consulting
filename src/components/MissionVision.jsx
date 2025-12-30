import React, { useState } from 'react';

export default function MissionVision() {
    const [hoverIndex, setHoverIndex] = useState(null);

    const cardStyle = (isHovered) => ({
        padding: "40px",
        borderBottom: "1px solid whitesmoke",
        transition: "all 0.3s ease",
        flex: "1",
        textAlign: "center"
    });

    return (
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", flexWrap: "wrap", borderTop: "1px solid whitesmoke" }}>
            {/* Our Mission  */}
            <div
                onMouseEnter={() => setHoverIndex(0)}
                onMouseLeave={() => setHoverIndex(null)}
                style={cardStyle(hoverIndex === 0)}
            >
                <h2 style={{ fontSize: "27px", fontWeight: hoverIndex === 0 ? "800" : "400", color: hoverIndex === 0 ? "black" : "darkgray" }}>
                    Our Mission
                </h2>
                <p style={{ color: hoverIndex === 0 ? "dimgray" : "silver", marginTop: "15px" }}>
                    To deliver futuristic IT solutions that empower businesses to lead in a hyper-connected digital world.
                </p>
            </div>

            {/* Our Vision  */}
            <div
                onMouseEnter={() => setHoverIndex(1)}
                onMouseLeave={() => setHoverIndex(null)}
                style={cardStyle(hoverIndex === 1)}
            >
                <h2 style={{ fontSize: "27px", fontWeight: hoverIndex === 1 ? "800" : "400", color: hoverIndex === 1 ? "black" : "darkgray" }}>
                    Our Vision
                </h2>
                <p style={{ color: hoverIndex === 1 ? "dimgray" : "silver", marginTop: "15px" }}>
                    To be the global benchmark for digital transformation, powered by intelligent and secure technology.
                </p>
            </div>
        </div>
    );
}