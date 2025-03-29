type Palette = {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
};

type Typography = {
  fontSize: string;
  fontFamily: string;
  fontWeight: string | number;
  lineHeight?: string | number;
}

export type AppTheme = {
  palette: {
    primary: Palette;
    secondary: Palette;
    background: string;
    text: string;
  };
  spacing: (factor?: number) => string;
  typography: {
    fontFamily: string;
    h1: Typography;
    h2: Typography;
    h3: Typography;
    h4: Typography;
    h5: Typography;
    h6: Typography;
    body1: Typography;
    body2: Typography;
  };
};

// Module augmentation to extend Emotion's Theme type
declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface Theme extends AppTheme { }
}

const fontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
const fontWeight = 400;
const lineHeight = 1.5;

export const theme: AppTheme = {
  palette: {
    primary: {
      light: "#BBDEFB",
      main: "var(--palette-primary-main, #2196F3)",
      dark: "#1976D2",
      contrastText: "#FFFFFF",
    },
    secondary: {
      light: "#FF4081",
      main: "#F50057",
      dark: "#C51162",
      contrastText: "#FFFFFF",
    },
    background: "#F5F5F5",
    text: "#212121",
  },
  spacing: (factor: number = 1) => `${factor * 8}px`,
  typography: {
    fontFamily,
    h1: {
      fontSize: "2rem",
      fontFamily,
      fontWeight,
      lineHeight,
    },
    h2: {
      fontSize: "1.5rem",
      fontFamily,
      fontWeight,
      lineHeight,
    },
    h3: {
      fontSize: "1.25rem",
      fontFamily,
      fontWeight,
      lineHeight,
    },
    h4: {
      fontSize: "1.125rem",
      fontFamily,
      fontWeight,
      lineHeight,
    },
    h5: {
      fontSize: "1rem",
      fontFamily,
      fontWeight,
      lineHeight,
    },
    h6: {
      fontSize: "0.875rem",
      fontFamily,
      fontWeight,
      lineHeight,
    },
    // body1 and body2 are typically used for paragraph text
    body1: {
      fontSize: "1rem",
      fontFamily,
      fontWeight,
      lineHeight,
    },
    // body2 is typically used for smaller text
    body2: {
      fontSize: "0.875rem",
      fontFamily,
      fontWeight,
      lineHeight,
    },
  }
};
