import { createTheme } from "@mui/material";
import { ColorPartial } from "@mui/material/styles/createPalette";

declare module '@mui/material/styles' {
  interface PaletteOptions {
    'accent'?:  ColorPartial
    'neutral'?: ColorPartial;
  }

}

export const light = createTheme({
  palette: {
    primary: {
      100: "hsl(295, 75%, 70%)",
      200: "hsl(295, 56%, 56%)",
      300: "hsl(295, 60%, 35%)",
      400: "hsl(295, 100%, 29%)",
      500: "hsl(295, 100%, 20%)",
      600: "hsl(295, 100%, 16%)",
      700: "hsl(295, 100%, 14%)",
      800: "hsl(295, 100%, 11%)",
      900: "hsl(295, 100%, 8%)"
    },
    secondary: {
      main: "hsl(204, 62%, 38%)",
      100: "hsl(204, 44%, 65%)",
      200: "hsl(204, 49%, 57%)",
      300: "hsl(204, 54%, 49%)",
      400: "hsl(204, 59%, 41%)",
      500: "hsl(204, 62%, 38%)",
      600: "hsl(204, 61%, 35%)",
      700: "hsl(204, 53%, 31%)",
      800: "hsl(204, 56%, 27%)",
      900: "hsl(204, 64%, 23%)"
    },
    neutral: {
      100: "hsl(210, 14%, 98%)",
      200: "hsl(210, 14%, 96%)",
      300: "hsl(210, 14%, 82%)",
      400: "hsl(210, 14%, 70%)",
      500: "hsl(210, 14%, 71%)",
      600: "hsl(210, 14%, 55%)",
      700: "hsl(210, 14%, 38%)",
      800: "hsl(210, 14%, 31%)",
      900: "hsl(210, 14%, 15%)"
    },
    // success: {

    // },
    // warning: {

    // },
    error: {
      100: "hsl(210, 14%, 98%)",
      200: "hsl(210, 14%, 96%)",
      300: "hsl(210, 14%, 82%)",
      400: "hsl(210, 14%, 70%)",
      500: "hsl(210, 14%, 71%)",
      600: "hsl(210, 14%, 55%)",
      700: "hsl(210, 14%, 38%)",
      800: "hsl(210, 14%, 31%)",
      900: "hsl(210, 14%, 15%)"
    }
  },
  typography: {
    fontFamily: ["proxima soft", "sans-serif"].join(","),
    fontSize: 16,
    h1: {
      fontFamily: ["Graphik", "-apple-system", "Segoe UI", "Noto Sans"].join(","),
      fontSize: 24,
    },
    h2: {
      fontFamily: ["Graphik", "-apple-system", "Segoe UI", "Noto Sans"].join(","),
      fontSize: 20,
    },
    h3: {
      fontFamily: ["Graphik", "-apple-system", "Segoe UI", "Noto Sans"].join(","),
      fontSize: 16,
    }
  },
  shape: {
    borderRadius: 12
  }
})