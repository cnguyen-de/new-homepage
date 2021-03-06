module.exports = {
  theme: {
    screens: {
      xs: '350px',
      sm: '640px',
      md: '768px',
      br: '888px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        '1/1': '100%',
        '34': '8.5rem',
        '50': '12.5rem',
        '66': '16.5rem',
        '96': '24rem',
        '98': '24.5rem'
      },
      inset: {
        '0': 0,
        auto: 'auto',
        '1/2': '50%',
        '1': '0.25rem',
        '4': '1rem'
      }
    }
  },
  variants: {
    cursor: ['responsive', 'hover', 'focus'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    borderColor: ['responsive', 'hover', 'focus', 'active'],
    border: ['responsive', 'hover', 'focus', 'active'],
    borderStyle: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [],
  purge: ['./src/**/*.html', './src/**/*.vue']
}
