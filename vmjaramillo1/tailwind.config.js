const colors = require("./src/styles/config-colors");
const fluidSpacing = require("./src/styles/config-fluid-spacing");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	important: "body",
	corePlugins: {
		container: false,
	},
    theme: {
        screens: {
            sm: "375px",
            md: "768px",
            lg: "1024px",
            xl: "1440px",
            xxl: "1920px",
        },
        colors: colors,
        spacing: {
            ...fluidSpacing,
            0: 0,
            8: "8px",
            16: "16px",
            24: "24px",
            32: "32px",
            40: "40px",
            48: "48px",
            56: "56px",
            64: "64px",
            72: "72px",
            80: "80px",
            88: "88px",
            96: "96px",
            104: "104px",
            112: "112px",
            120: "120px",
            128: "128px",
            136: "136px",
            144: "144px",
            142: "142px",
            152: "152px",
            160: "169px",
            168: "168px",
            176: "176px",
            184: "184px",
            192: "192px",
        },
        fontSize: {},
        lineHeight: {
            "fluid": "1.2",
            3: ".75rem",
            4: "1rem",
            5: "1.25.rem",
            6: "1.5rem",
            7: "1.75rem",
            8: "2rem",
            9: "2.25rem",
            10: "2.50rem",
            13: "13px",
            16: "16px",
            19: "19px",
            20: "20px",
            21: "21px",
            22: "22px",
            24: "24px",
            26: "26px",
            27: "27px",
            28: "28px",
            32: "32px",
            34: "34px",
            37: "37px",
            38: "38px",
            40: "40px",
            46: "46px",
            50: "50px",
            54: "54px",
        },
        fontFamily: {
            heading: ["Saira", "Arial", "Helvetica", "sans-serif"],
            body: ["Helvetica", "Arial", "sans-serif"],
            'Nunito':  ["Nunito", "Helvetica", "Arial", "sans-serif"],
            'ElegantIcons':  ["ElegantIcons", "Helvetica", "Arial", "sans-serif"],
        },
        extend: {
            borderRadius:{
                4: "4px",
                8: "8px",
            },
            boxShadow: {
                "2md": "0px 8px 8px -7px rgba(7, 7, 7, 0.16)",
            },
            opacity: {
                15: ".15",
            },
            minHeight: {
                "space-m": "var(--space-m)",
                "space-l": "var(--space-l)",
                "space-xl": "var(--space-xl)",
                "space-11xl": "var(--space-11xl)",
            },
            minWidth: {
                "space-xl": "var(--space-xl)",
                "space-m": "var(--space-m)",
                "space-s": "var(--space-s)",
                23: "23px",
            },
            maxWidth: {
                0: 0,
                8: "8px",
                16: "16px",
                24: "24px",
                32: "32px",
                40: "40px",
                48: "48px",
                56: "56px",
                64: "64px",
                72: "72px",
                80: "80px",
                88: "88px",
                96: "96px",
                104: "104px",
                112: "112px",
                120: "120px",
                128: "128px",
                136: "136px",
                144: "144px",
                142: "142px",
                152: "152px",
                160: "169px",
                168: "168px",
                176: "176px",
                184: "184px",
                192: "192px",
                "container": "1920px",
                "space-2xl": "var(--space-2xl)",
                "space-m": "var(--space-m)",
            },
        },
    },
    plugins: [],
};
