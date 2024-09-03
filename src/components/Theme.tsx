import { BaseTheme, createTheme } from "@shopify/restyle";

const theme: BaseTheme = createTheme({
  colors: {
    pureWhite: "#FFFFFF",
    pureBlack: "#000000",

    white: "#F0F2F3",
    black: "#0B0B0B",
    
    primary: "#2CB9B0",
    
    title: "#0C0D34",
    text: "rgba(12, 13, 52, 0.7)",
    
    gray: "rgba(12, 13, 52, 0.05)",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: "SFProText-Bold",
      color: "pureWhite",
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      fontFamily: "SFProText-SemiBold",
      color: "title",
      textAlign: "center",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "SFProText-SemiBold",
      color: "title",
      textAlign: "center",
    },
    button: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "SFProText-SemiBold",
      color: "title",
      textAlign: "center",
    },
    defaults: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "SFProText-Regular",
      color: "text",
    },
  },
});

export type Theme = typeof theme;

export default theme;
