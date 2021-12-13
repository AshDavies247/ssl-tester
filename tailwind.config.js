module.exports = {
    purge: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        fontFamily: {
            body: "Open Sans",
        },
        fontSize: {
            xs: ["0.8125rem", "16px"],
            sm: ["0.875rem", "20px"],
            base: ["1.0625rem", "24px"],
            md: ["1.125rem", "24px"],
            lg: ["1.25rem", "24px"],
            xl: ["1.5rem", "24px"],
            "2xl": ["1.875rem", "24px"],
            "3xl": ["2.25rem", "42px"],
        },
        colors: {
            blue: {
                50: "#007bff",
                100: "#036291",
                200: "#251c4d",
                300: "#47535f",
            },
            red: {
                100: "#fc3782",
                200: "#cf0a3c",
            },
            green: {
                100: "#5af1c8",
                200: "#3aa838",
            },
            purple: {
                100: "#f6f6fc",
                200: "#e6e2f7",
                300: "#797194",
                400: "#71476f",
            },
            grey: {
                100: "#f5f6f7",
            },
            white: {
                DEFAULT: "#fff",
            },
        },

        extend: {
            maxWidth: {
                form: "68.125rem",
                content: "102.25rem",
            },
        },
    },
    plugins: [],
};
