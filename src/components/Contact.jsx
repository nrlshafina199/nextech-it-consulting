import React from 'react';
import { useState } from 'react';

export default function Contact() {

    const styles = {
        wrapper: {
            backgroundColor: "white",
            minHeight: "100vh",
            fontFamily: "'Space Grotesk', sans-serif",
            color: "black",
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
            width: "100px",
            height: "5px",
            backgroundColor: "black",
            margin: "24px auto 0",
        },
        introText: {
            margin: "40px 35px 10px",
            fontSize: "20px",
            lineHeight: "1.8",
            color: "dimgray",
            textAlign: "center",
        },
        companyInfo: {
            margin: "70px 50px 70px 0",
            flex: "1",
            fontSize: "20px",
            lineHeight: "1.8",
            textAlign: "center",
        },
        contentRow: {
            display: "flex",
            justifyContent: "space-between",
            gap: "40px",
            margin: "50px 70px 70px",
            alignItems: "flex-start",
            flexWrap: "wrap", // responsive
        },
        form: {
            flex: "1",
            margin: "0 100px 10px",
            maxWidth: "500px",

            backgroundColor: "whitesmoke",   // box background
            padding: "30px",                 // space inside box
            borderRadius: "12px",             // rounded corners
            border: "1px solid lightgray",    // visible outline
            boxShadow: "0 6px 20px rgba(0,0,0,0.08)", // optional depth
        },
        visitUs: {
            margin: "20px 0 10px",
            fontSize: "25px",
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
            width: "800px",          // fixed width
            height: "96px",         // fixed height
            margin: "40px auto",     // center horizontally with margin
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
         },
    };

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
        e.preventDefault(); // ❗ stops page refresh

        // basic validation
        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in the required field(s).");
            return;
        }

        console.log("Form submitted:", formData);

        // reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });

        alert("Your message has been sent successfully!");
    };

    return (
        <div style={styles.wrapper}>

            {/* Page Header */}
            <section style={styles.headerSection}>
                 <h1 style={styles.mainTitle}>
                    <span style={{ fontWeight: "800" }}>Contact Us</span>
                 </h1>
                 <div style={styles.accentBar} />
            </section>

            {/* Intro Text*/}
            <p style={styles.introText}>
                 Got questions? Send us a message or reach out using the details below!
            </p>

            <div style={styles.contentRow}>

                {/* Message Form */}
                <form style={styles.form} className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <p><strong>Name: </strong><span style={{ color: "red" }}>*</span></p>
                    <input type="text" name="name" placeholder="Enter your name..." value={formData.name} onChange={handleChange} className="p-3 rounded-md bg-gray-800 text-gray-100"/>
                    <p><strong>Email: </strong><span style={{ color: "red" }}>*</span></p>
                    <input type="email" name="email" placeholder="Enter your email..." value={formData.email} onChange={handleChange} className="p-3 rounded-md bg-gray-800 text-gray-100"/>
                    <p><strong>Subject:</strong></p>
                    <input type="text" name="subject" placeholder="Enter the subject..." value={formData.subject} onChange={handleChange} className="p-3 rounded-md bg-gray-800 text-gray-100"/>
                    <p><strong>Message: </strong><span style={{ color: "red" }}>*</span></p>
                    <textarea name="message" placeholder="Enter your message..." rows="5" value={formData.message} onChange={handleChange} className="p-3 rounded-md bg-gray-800 text-gray-100"></textarea>
                    <button type="submit" className="bg-cyan-400 text-gray-900 px-6 py-3 rounded-md hover:bg-cyan-600 transition self-center" style={{ marginTop: "30px" }}> Submit </button>
                </form>

                {/* Company Info*/}
                <div style={styles.companyInfo}>
                    <p><strong>Email:</strong> nexTech@itcompany.com.my</p>
                    <p><strong>Phone:</strong> +6012-3456789</p>
                    <p><strong>Address:</strong> Butterworth, Penang, Malaysia</p>
                    <p><strong>Business Hours:</strong> 9am-6pm | Monday-Friday</p>
                </div>
            </div>

            {/* Google Map */}
            <p style={styles.visitUs}>
                 <strong>Come Visit Us!</strong>
            </p>
            <div style={styles.accentBar2} />
            <div style={styles.mapContainer}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63550.188459950696!2d100.3686616517208!3d5.434163153495858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac5069ac06373%3A0xfd24d9999c7bb46a!2sButterworth%2C%20Penang!5e0!3m2!1sen!2smy!4v1767138074551!5m2!1sen!2smy"
                    className="w-full h-96 rounded-lg border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Come Visit Us"
                />
            </div>
        </div>
    );
}