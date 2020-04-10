module.exports = {
  theme: {
    extend: {
      colors: {
        paletteBlue: '#a0ced9',
        paletteYellow: '#fcf5c7',
        paletteYellowDark: '#ffee93',
        paletteRed: '#ffc09f',
        paletteGreen: '#adf7b6',

        paletteGrayDark: '#4d4d4d',
        paletteGrayLight: '#999999',
      },
      maxHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      }
    },
  },
  variants: {
    // active, hover, etc variants enabled here
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
