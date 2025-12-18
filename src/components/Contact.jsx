export default function Contact() {
    return (
        <section id="contact" className="px-12 py-20 bg-gray-900 text-gray-100">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Contact Us</h2>
            <form className="max-w-lg mx-auto flex flex-col gap-4">
                <input type="text" placeholder="Name" className="p-3 rounded-md bg-gray-800 text-gray-100"/>
                <input type="email" placeholder="Email" className="p-3 rounded-md bg-gray-800 text-gray-100"/>
                <textarea placeholder="Message" className="p-3 rounded-md bg-gray-800 text-gray-100"></textarea>
                <button className="bg-cyan-400 text-gray-900 px-6 py-3 rounded-md hover:bg-cyan-600 transition">Send</button>
            </form>
        </section>
    );
}