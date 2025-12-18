module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                neonCyan: "#00fff7",
                neonPurple: "#b300ff",
                neonPink: "#ff00f0",
                darkBg: "#0d0d0d",
            },
            fontFamily: {
                grotesk: ['Space Grotesk', 'sans-serif'],
            },
            animation: {
                'pulse-slow': 'pulse 3s infinite',
                'fade-in': 'fadeIn 2s ease-in forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
            },
        },
    },
    plugins: [],
};
