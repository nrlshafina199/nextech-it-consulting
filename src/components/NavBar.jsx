export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-12 py-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-cyan-400 shadow-md">
            <h1 className="text-2xl font-bold text-cyan-400">NexTech</h1>
            <ul className="flex space-x-6 text-gray-200">
                <li className="hover:text-cyan-400 cursor-pointer">Home</li>
                <li className="hover:text-cyan-400 cursor-pointer">About</li>
                <li className="hover:text-cyan-400 cursor-pointer">Mission & Vision</li>
                <li className="hover:text-cyan-400 cursor-pointer">Services</li>
                <li className="hover:text-cyan-400 cursor-pointer">Team</li>
                <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
            </ul>
        </nav>
    );
}