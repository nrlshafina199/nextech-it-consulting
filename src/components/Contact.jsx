import React from 'react';
import Team from './Team';

export default function Contact() {
    const styles = {
            wrapper: {
                backgroundColor: "white",
                minHeight: "100vh",
                fontFamily: "'Space Grotesk', sans-serif",
                color: "black",
                paddingTop: "90px"
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
        <section id="contact" className="px-12 py-20 bg-gray-900 text-gray-100">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400 text-center">Contact Us</h2>
            <p className="text-center text-gray-400 mb-10">
                Got questions? Send us a message or reach out using the details below.
               </p>

            {/* Company Info */}
            <div className="max-w-lg mx-auto mb-10 text-gray-300 text-center">
                <p><strong>Email:</strong> nexTechIT@company.com.my</p>
                <p><strong>Phone:</strong> +60 12-3456789</p>
                <p><strong>Address:</strong> Butterworth, Penang, Malaysia</p>
                <p><strong>Business Hours:</strong>  Monday-Friday || 9am-6pm</p>
               </div>

            {/* Contact Form */}
            <form className="max-w-lg mx-auto flex flex-col gap-4">
                <input type="text" placeholder="Name" className="p-3 rounded-md bg-gray-800 text-gray-100"/>
                <input type="email" placeholder="Email" className="p-3 rounded-md bg-gray-800 text-gray-100"/>
                <textarea placeholder="Message" rows="5" className="p-3 rounded-md bg-gray-800 text-gray-100"></textarea>
                <button type="submit" className="bg-cyan-400 text-gray-900 px-6 py-3 rounded-md hover:bg-cyan-600 transition">Send Message</button>
            </form>

            {/* Google Map */}
            <div className="max-w-4xl mx-auto mt-16">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63550.188459950696!2d100.3686616517208!3d5.434163153495858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac5069ac06373%3A0xfd24d9999c7bb46a!2sButterworth%2C%20Penang!5e0!3m2!1sen!2smy!4v1767138074551!5m2!1sen!2smy"
                    className="w-full h-96 rounded-lg border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Come Visit Us"
                />
            </div>

        </section>

    );
}