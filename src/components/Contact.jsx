import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in the required field(s).");
            return;
        }

        console.log("Form submitted:", formData);

        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });

        alert("Your message has been sent successfully!");
    };

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
            textAlign: "center"
        },
        mainTitle: {
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: "300",
            color: "black",
            margin: "0",
        },
        accentBar: {
            width: "100px",
            height: "5px",
            backgroundColor: "black",
            margin: "24px auto 0",
        },
        introText: {
            margin: "30px 20px",
            fontSize: "clamp(16px, 3vw, 20px)",
            lineHeight: "1.8",
            color: "dimgray",
            textAlign: "center",
        },
        contentRow: {
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            margin: "30px 20px",
            alignItems: "center",
        },
        form: {
            width: "100%",
            maxWidth: "500px",
            backgroundColor: "whitesmoke",
            padding: "30px 20px",
            borderRadius: "12px",
            border: "1px solid lightgray",
            boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        },
        companyInfo: {
            width: "100%",
            maxWidth: "500px",
            fontSize: "clamp(16px, 3vw, 20px)",
            lineHeight: "1.8",
        },
        infoItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            marginBottom: '20px',
            flexWrap: 'wrap',
        },
        visitUs: {
            margin: "40px 20px 10px",
            fontSize: "clamp(20px, 4vw, 25px)",
            fontFamily: "'Space Grotesk', sans-serif",
            color: "black",
            textAlign: "center",
        },
        accentBar2: {
            width: "50px",
            height: "2px",
            backgroundColor: "black",
            margin: "15px auto 0",
        },
        mapContainer: {
            width: "calc(100% - 40px)",
            maxWidth: "800px",
            height: "300px",
            margin: "40px auto",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        },
        input: {
            width: "100%",
            padding: "12px",
            borderRadius: "6px",
            backgroundColor: "#2d3748",
            color: "#f7fafc",
            border: "none",
            fontSize: "16px",
            marginBottom: "15px",
            boxSizing: "border-box",
        },
        textarea: {
            width: "100%",
            padding: "12px",
            borderRadius: "6px",
            backgroundColor: "#2d3748",
            color: "#f7fafc",
            border: "none",
            fontSize: "16px",
            marginBottom: "15px",
            resize: "vertical",
            minHeight: "120px",
            boxSizing: "border-box",
        },
        button: {
            backgroundColor: "#22d3ee",
            color: "#1a202c",
            padding: "12px 24px",
            borderRadius: "6px",
            border: "none",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            marginTop: "15px",
            transition: "background-color 0.3s ease",
        }
    };

    return (
        <div style={styles.wrapper}>
            <section style={styles.headerSection}>
                <h1 style={styles.mainTitle}>
                    <span style={{ fontWeight: "800" }}>Contact Us</span>
                </h1>
                <div style={styles.accentBar} />
            </section>

            <p style={styles.introText}>
                Got questions? Send us a message or reach out using the details below!
            </p>

            <div style={styles.contentRow}>
                <div style={styles.form}>
                    <p style={{ marginBottom: "5px" }}>
                        <strong>Name: </strong>
                        <span style={{ color: "red" }}>*</span>
                    </p>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name..."
                        value={formData.name}
                        onChange={handleChange}
                        style={styles.input}
                    />

                    <p style={{ marginBottom: "5px" }}>
                        <strong>Email: </strong>
                        <span style={{ color: "red" }}>*</span>
                    </p>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email..."
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.input}
                    />

                    <p style={{ marginBottom: "5px" }}>
                        <strong>Subject:</strong>
                    </p>
                    <input
                        type="text"
                        name="subject"
                        placeholder="Enter the subject..."
                        value={formData.subject}
                        onChange={handleChange}
                        style={styles.input}
                    />

                    <p style={{ marginBottom: "5px" }}>
                        <strong>Message: </strong>
                        <span style={{ color: "red" }}>*</span>
                    </p>
                    <textarea
                        name="message"
                        placeholder="Enter your message..."
                        value={formData.message}
                        onChange={handleChange}
                        style={styles.textarea}
                    />

                    <div style={{ textAlign: "center" }}>
                        <button
                            type="submit"
                            style={styles.button}
                            onMouseOver={(e) => e.target.style.backgroundColor = "#06b6d4"}
                            onMouseOut={(e) => e.target.style.backgroundColor = "#22d3ee"}
                        >
                            Submit
                        </button>
                    </div>
                </div>

                <div style={styles.companyInfo}>
                    <div style={styles.infoItem}>
                        <FaEnvelope color="black" size={20} />
                        <span>nexTech@itcompany.com.my</span>
                    </div>
                    <div style={styles.infoItem}>
                        <FaPhoneAlt color="black" size={20} />
                        <span>+6012-3456789</span>
                    </div>
                    <div style={styles.infoItem}>
                        <FaMapMarkerAlt color="black" size={20} />
                        <span>Butterworth, Penang, Malaysia</span>
                    </div>
                    <div style={styles.infoItem}>
                        <FaBriefcase color="black" size={20} />
                        <span>9am-6pm | Monday-Friday</span>
                    </div>
                </div>
            </div>

            <p style={styles.visitUs}>
                <strong>Come Visit Us!</strong>
            </p>
            <div style={styles.accentBar2} />
            <div style={styles.mapContainer}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63550.188459950696!2d100.3686616517208!3d5.434163153495858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac5069ac06373%3A0xfd24d9999c7bb46a!2sButterworth%2C%20Penang!5e0!3m2!1sen!2smy!4v1767138074551!5m2!1sen!2smy"
                    style={{ width: "100%", height: "100%", border: "0" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Come Visit Us"
                />
            </div>
        </div>
    );
}