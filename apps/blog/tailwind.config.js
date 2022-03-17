module.exports = {
  content: [
    'apps/blog/pages/**/*.{js,ts,jsx,tsx}',
    'apps/blog/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height: {
        mozFill: '-moz-available',
        webkitFill: '-webkit-fill-available',
      },
    },
    fontFamily: {
      title: ['Playfair Display SC', 'system-ui', 'sans-serif'],
      text: ['EB Garamond', 'system-ui', 'sans-serif'],
      head: ['Playfair Display', 'system-ui', 'sans-serif'],
      manrope: ['Manrope', 'system-ui', 'sans-serif'],
      sans: ['sans-serif', 'system-ui'],
    },
    colors: {
      defaultColor: '#1c1f33',
      white: '#ffffff',
      textWhite: '#eeeeee',
    },
  },
  plugins: [],
};
