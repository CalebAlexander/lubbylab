module.exports = {
  theme: {
    extend: {
      colors: {
        paletteBlack: '#131515',
        paletteGray: '#2c2c28',
        paletteTeal: '#339989',
        paletteMint: '#7de2d1',
        paletteWhite: '#fffafb',

        paletteLightBlue: '#b1ddf1',
        paletteLightPurple: '#9f87af',
        paletteDarkPurple: '#88527f',
        paletteLightBrown: '#614344',
        paletteDarkBrown: '#332c23',

        paletteYellow: '#ffcf56'
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
