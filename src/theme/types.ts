import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    fraud: Palette['primary'];
    nonFraud: Palette['primary'];
    exposed: Palette['primary'];
    shipping: Palette['primary'];
    topmail: Palette['primary'];
    account: Palette['primary'];
    lightBlue: Palette['primary'];
    darkBlue: Palette['primary'];
    mediumBlue: Palette['primary'];
    lightGray: Palette['primary'];
    mediumGray: Palette['primary'];
    darkGray: Palette['primary'];
  }

  interface PaletteOptions {
    fraud?: PaletteOptions['primary'];
    nonFraud?: PaletteOptions['primary'];
    exposed?: PaletteOptions['primary'];
    shipping?: PaletteOptions['primary'];
    topmail?: PaletteOptions['primary'];
    account?: PaletteOptions['primary'];
    lightBlue?: PaletteOptions['primary'];
    darkBlue?: PaletteOptions['primary'];
    mediumBlue?: PaletteOptions['primary'];
    lightGray?: PaletteOptions['primary'];
    mediumGray?: PaletteOptions['primary'];
    darkGray?: PaletteOptions['primary'];
  }
}
