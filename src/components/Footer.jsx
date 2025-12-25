import React from "react";

export default function Footer() {
    return (
        <footer style={{
            padding: "80px 24px",
            textAlign: "center",
            borderTop: "1px solid whitesmoke",
            backgroundColor: "white"
        }}>
            <p style={{
                color: "darkgray",
                fontSize: "14px",
                letterSpacing: "2px",
                fontFamily: "'Space Grotesk', sans-serif",
                margin: 0
            }}>
                NEXTECH IT CONSULTING &copy; 2025. ALL RIGHTS RESERVED.
            </p>
        </footer>
    );
}