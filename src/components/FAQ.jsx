import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        {
            question: "What services does NexTech provide?",
            answer: "We specialize in System Analysis, IoT Solutions, and Web Development for modern businesses."
        },
        {
            question: "How can I contact technical support?",
            answer: "You can reach our 24/7 support team via the Contact Us page or email support@nextech.com."
        },
        {
            question: "Do you offer mobile app development?",
            answer: "Yes! We develop cross-platform mobile applications using React Native and Flutter."
        },
        {
            question: "How much does a consultation cost?",
            answer: "Our initial project consultation is 100% free. We discuss your needs and provide a custom quote."
        },
        {
            question: "Where is NexTech located?",
            answer: "Our headquarters are in Butterworth, Penang, but we serve clients globally."
        }
    ];

    const filteredFAQs = faqData.filter(item =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <h1>Frequently Asked Questions</h1>

            <div className="faq-search-box">
                <input
                    type="text"
                    placeholder="Search for answers..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="faq-list">
                {filteredFAQs.length > 0 ? (
                    filteredFAQs.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'open' : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                {item.question}
                                <span className="faq-arrow">{openIndex === index ? '−' : '+'}</span>
                            </div>

                            {openIndex === index && (
                                <div className="faq-answer">
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p className="no-results">No questions found matching "{searchTerm}"</p>
                )}
            </div>
        </div>
    );
};

export default FAQ;