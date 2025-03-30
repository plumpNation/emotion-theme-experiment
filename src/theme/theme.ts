import type { Property } from "csstype";

type Palette = {
  light: Property.Color;
  main: Property.Color;
  dark: Property.Color;
  contrastText: Property.Color;
};

type Typography = {
  fontSize: Property.FontSize;
  fontFamily: Property.FontFamily;
  fontWeight?: Property.FontWeight;
  lineHeight?: Property.LineHeight;
  margin?: Property.Margin;
}

export type AppTheme = {
  borderRadius: Property.BorderRadius;
  palette: {
    primary: Palette;
    secondary: Palette;
    background: Property.Color;
    grey: Record<number, Property.Color>;
    error: Palette;
    warning: Palette;
    info: Palette;
    success: Palette;
    default: Palette;
  };
  spacing: (factor?: number) => string;
  typography: {
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

const fontFamily = 'var(--typography--font-family)';
const fontWeight = 'var(--typography--font-weight)';
const lineHeight = 'var(--typography--line-height)';

const unitValue = 8;
const unit = (value: number = 1) => `${value * unitValue}px`;

export const theme: AppTheme = {
  borderRadius: "4px",
  palette: {
    primary: {
      light: "var(--palette__primary--light)",
      main: "var(--palette__primary--main)",
      dark: "var(--palette__primary--dark)",
      contrastText: "var(--palette__primary--contrastText)",
    },
    secondary: {
      light: "var(--palette__secondary--light)",
      main: "var(--palette__secondary--main)",
      dark: "var(--palette__secondary--dark)",
      contrastText: "var(--palette__secondary--contrastText)",
    },
    error: {
      light: "var(--palette__error--light)",
      main: "var(--palette__error--main)",
      dark: "var(--palette__error--dark)",
      contrastText: "var(--palette__error--contrastText)",
    },
    warning: {
      light: "var(--palette__warning--light)",
      main: "var(--palette__warning--main)",
      dark: "var(--palette__warning--dark)",
      contrastText: "var(--palette__warning--contrastText)",
    },
    info: {
      light: "var(--palette__info--light)",
      main: "var(--palette__info--main)",
      dark: "var(--palette__info--dark)",
      contrastText: "var(--palette__info--contrastText)",
    },
    success: {
      light: "var(--palette__success--light)",
      main: "var(--palette__success--main)",
      dark: "var(--palette__success--dark)",
      contrastText: "var(--palette__success--contrastText)",
    },
    default: {
      light: "var(--palette__default--light)",
      main: "var(--palette__default--main)",
      dark: "var(--palette__default--dark)",
      contrastText: "var(--palette__default--contrastText)",
    },

    grey: {
      50: "var(--palette__grey--50)",
      100: "var(--palette__grey--100)",
      200: "var(--palette__grey--200)",
      300: "var(--palette__grey--300)",
      400: "var(--palette__grey--400)",
      500: "var(--palette__grey--500)",
      600: "var(--palette__grey--600)",
      700: "var(--palette__grey--700)",
      800: "var(--palette__grey--800)",
      900: "var(--palette__grey--900)",
    },
    background: "var(--palette__background)",
  },

  spacing: unit,

  typography: {
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
