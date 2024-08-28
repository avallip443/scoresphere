module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        blue_light: "#235e80",
        white: '#faf3e6',
        primary: '#124168', 
        secondary: '#062540',
        accent: '#eaa007',
        neutral: {
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        danger: '#e3342f',
        success: '#38c172',
        warning: '#f59e0b',
      },
    },
  },
  plugins: [],
};
