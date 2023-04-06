/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["index.html"],
	theme: {
		fontFamily: {
			raleway: ["Raleway", "sans-serif"],
		},
		borderRadius: {
			big: "90px",
			normal: "10px",
			normal2: "20px",
			full: "100%",
		},
		extend: {
			spacing: {
				130: "130px",
			},
			borderWidth: {
				20: "20px",
				30: "30px",
				25: "25px",
			},
			colors: {
				PaleBlue: "hsl(243, 100%, 93%)",
				GrayishBlue: "hsl(229, 7%, 55%)",
				DarkBlue: "hsl(228, 56%, 26%)",
				VeryDarkBlue: "hsl(229, 57%, 11%)",
				gradient1: "hsl(6, 100%, 80%)",
				gradient2: "hsl(335, 100%, 65%)",
			},
			backgroundImage: {
				mobile: "url('./images/bg-mobile.png')",
				desktop: "url('./images/bg-desktop.png')",
			},
		},
	},
	plugins: [],
};
