import office from "../assets/office.jpg";

export default function Office() {
    return (
        <section id="office" className="px-16 py-20 bg-gray-800 text-gray-100">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Our Office</h2>
            <img src={office} alt="Office" className="rounded-lg shadow-lg"/>
            <p className="mt-4 max-w-3xl">
                Our modern office is located in the heart of the city, designed for innovation and collaboration.
            </p>
        </section>
    );
}