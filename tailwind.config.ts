import type { Config } from "tailwindcss";

// Minimal Tailwind v4 config - only used for the tailwindcss-animate plugin
// Most configuration is now in app/globals.css using the @theme directive
const config = {
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
