import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/website logo.png";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredPath, setHoveredPath] = useState(null);
    const location = useLocation();

    const menuItems = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Services", path: "/services" },
        { label: "FAQs", path: "/faqs" },
        { label: "Contact Us", path: "/contact" },
    ];

    const styles = {
        header: {
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "90px",
            backgroundColor: "white",
            borderBottom: "1px solid lightgray",
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            fontFamily: "'Space Grotesk', sans-serif",
        },
        navWrapper: {
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        },
        logoContainer: {
            display: "flex",
            alignItems: "center",
            height: "60px",
        },
        logoImg: {
            height: "100%",
            width: "auto",
            objectFit: "contain",

        },
        menuList: {
            display: "flex",
            listStyle: "none",
            margin: 0,
            padding: 0,
        },
        link: (path) => {
            const active = location.pathname === path || hoveredPath === path;
            return {
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: "700",
                color: active ? "black" : "gray",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                padding: "0 25px",
                height: "90px",
                display: "flex",
                alignItems: "center",
                transition: "all 0.3s ease",
                borderTop: location.pathname === path ? "5px solid black" : "5px solid transparent",
                backgroundColor: hoveredPath === path ? "whitesmoke" : "transparent",
            };
        },
        mobileBtn: {
            background: "none",
            border: "none",
            fontSize: "28px",
            cursor: "pointer",
            color: "black",
        }
    };

    return (npmm
        <header style={styles.header}>
            <div style={styles.navWrapper}>
                <Link to="/" style={styles.logoContainer}>
                    <img
                        src={logo}
                        alt="NexTech Logo"
                        style={styles.logoImg}
                    />
                </Link>

                {/* Desktop Links */}
                <ul className="hidden md:flex" style={styles.menuList}>
                    {menuItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                onMouseEnter={() => setHoveredPath(item.path)}
                                onMouseLeave={() => setHoveredPath(null)}
                                style={styles.link(item.path)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" style={styles.mobileBtn}>
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div style={{
                    position: "absolute",
                    top: "90px",
                    left: "0",
                    width: "100%",
                    backgroundColor: "white",
                    borderBottom: "2px solid black",
                    padding: "20px 0",
                    textAlign: "center"
                }}>
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            style={{
                                display: "block",
                                padding: "15px",
                                textDecoration: "none",
                                color: "black",
                                fontWeight: "bold",
                                fontSize: "16px",
                                textTransform: "uppercase"
                            }}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}