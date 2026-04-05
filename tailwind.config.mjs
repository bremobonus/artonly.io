/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
      colors: {
        ink: '#0a0a0a',
        bone: '#f5f2ee',
        ash: '#9a9a9a',
        accent: '#c8a96e',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#0a0a0a',
            a: { color: '#c8a96e', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } },
            h1: { fontFamily: 'Georgia, serif' },
            h2: { fontFamily: 'Georgia, serif' },
            h3: { fontFamily: 'Georgia, serif' },
          },
        },
      },
    },
  },
  plugins: [],
};
