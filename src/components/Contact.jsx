export default function Contact() {
    return (
        <section id="contact" className="px-12 py-20 bg-gray-900 text-gray-100">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Contact Us</h2>
            <p className="text-center text-gray-400 mb-10">
                Have any questions? We'd love to hear from you. Reach out using the form or details below for seamless solutions!
               </p>

            {/* Company Info */}
            <div className="max-w-lg mx-auto mb-10 text-gray-0300 text-center">
                <p><strong>Email:</strong> nexTechit@company.com.my</p>
                <p><strong>Phone:</strong> +60 12-345-6789</p>
                <p><strong>Address:</strong> Butterworth, Penang, Malaysia</p>
               </div>

            {/* Contact Form */}
            <form className="max-w-lg mx-auto flex flex-col gap-4">
                <input type="text" placeholder="Name" className="p-3 rounded-md bg-gray-800 text-gray-100"/>
                <input type="email" placeholder="Email" className="p-3 rounded-md bg-gray-800 text-gray-100"/>
                <textarea placeholder="Message" rows="5" className="p-3 rounded-md bg-gray-800 text-gray-100"></textarea>
                <button type="submit" className="bg-cyan-400 text-gray-900 px-6 py-3 rounded-md hover:bg-cyan-600 transition">Send Message</button>
            </form>
        </section>
    );
}