const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        poppins: ["'Poppins'", 'sans-serif']
      },
      colors:{

        navbar: 'var(--color-navbar-bg)',
        container: 'var(--color-container-bg)',
        text: 'var(--color-text)',
        hoverText: 'var(--color-hover)',
        fullbg: 'var(--color-whole-bg)',
        mainColor: 'var(--color-main)',
        textSecondary:'var(--color-text-secondary)',
        paraColor:'var(--color-para)',
        mainSecondayColor:'var(--color-main-secondary)',
        timeColor:'var(--color-time)',
        premiumColor:'#E2B900',
        inputBg:'var(--color-input-bg)'
      },
      // backgroundImage: {
      //   'theme-gradient': 'var(--color-gradient-bg)',
      // },
    },
  },
  plugins: [],
});