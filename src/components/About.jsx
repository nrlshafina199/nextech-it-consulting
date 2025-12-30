import React from 'react';
import Team from './Team';
import MissionVision from './MissionVision';

export default function About() {
    const styles = {
        wrapper: {
            backgroundColor: "white",
            minHeight: "100vh",
            fontFamily: "'Space Grotesk', sans-serif",
            color: "black",
            paddingTop: "90px" // To clear your NavBar
        },
        headerSection: {
            backgroundColor: "whitesmoke",
            padding: "80px 24px",
            borderBottom: "1px solid lightgray",
            textAlign: "center"
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
            margin: "24px auto 0",
        },
        introText: {
            maxWidth: "800px",
            margin: "60px auto",
            fontSize: "20px",
            lineHeight: "1.8",
            color: "dimgray",
            textAlign: "center",
            padding: "0 24px"
        }
    };

    return (
        <div style={styles.wrapper}>
            {/* Page Header */}
            <section style={styles.headerSection}>
                <h1 style={styles.mainTitle}>
                    About <span style={{ fontWeight: "800" }}>NexTech</span>
                </h1>
                <div style={styles.accentBar}></div>
            </section>

            {/* Introduction */}
            <p style={styles.introText}>
                Founded by visionary computer science graduates, NexTech is a modern IT related company specializing in
                software house operations, cloud integration, and cybersecurity for digital transformation.
            </p>

            {/* Background Sections */}
            <MissionVision />

            {/* Team Section */}
            <Team />
        </div>
    );
}