import { createTheme } from "@shopify/restyle";

const palette = {
  black: "#0B0B0B",
  white: "#F0F2F3",
};

const theme = createTheme({
  colors: {
    background: palette.white,

    success: "green",
    error: "red",
    warning: "yellow",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontWeight: "bold",
      fontSize: 32,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    default: {
      // We can define a default text variants here
    },
  },
});

export type Theme = typeof theme;

export default theme;
