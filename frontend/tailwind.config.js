module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B7AF4',
        secondary: '#FFFFFF',
        tertiary: '#8B7AF4',
        accent: '#61DAFB',
        background: '#000300'
      },
      fontFamily: {
        mono: ['"Space Mono"', 'monospace']
      },
    },
  },
  plugins: [],
};
