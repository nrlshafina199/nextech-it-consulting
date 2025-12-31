import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        {
            question: "What core services does NexTech offer?",
            answer: "We specialize in futuristic technologies including Cloud Integration, Cybersecurity, Artificial Intelligence (AI), and Digital Transformation strategies."
        },
        {
            question: "Why should I choose NexTech as my partner?",
            answer: "We are a trusted partner with a 98% Client Satisfaction rate and over 50+ successful projects delivered worldwide by our certified experts."
        },
        {
            question: "How do you ensure the security of my data?",
            answer: "Security is our priority. We implement industry-leading cybersecurity protocols and encrypted cloud integration to protect your business assets."
        },
        {
            question: "Do you work with startups or only large enterprises?",
            answer: "Both! We empower emerging startups with scalable solutions and help established enterprises optimize operations for sustainable growth."
        },
        {
            question: "Where is NexTech IT Consulting located?",
            answer: "We are headquartered in the heart of Malaysia's tech ecosystem (Penang), but we serve clients globally through remote collaboration."
        },
        {
            question: "What is your typical project timeline?",
            answer: "Timelines vary by complexity, but we pride ourselves on agile delivery. A standard system analysis and solution design typically takes 2-4 weeks."
        },
        {
            question: "Do you provide post-launch support and maintenance?",
            answer: "Yes. We offer long-term partnerships with continuous maintenance, security updates, and 24/7 technical support."
        },
        {
            question: "What technologies do your developers use?",
            answer: "Our experts utilize modern stacks including React, Node.js, Python for AI, and secure Cloud platforms (AWS/Azure) to build robust solutions."
        },
        {
            question: "How can I get a quotation for my project?",
            answer: "It's simple! Visit our 'Contact Us' page to send a message. Our team will review your requirements and provide a free consultation."
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