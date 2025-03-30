import styled from "@emotion/styled";
import { type FC, type PropsWithChildren } from "react";

import { AppTheme } from "../theme";
import { DynamicElement } from "./DynamicElement";

export type HTMLTextElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "li" | "a" | "strong" | "dt" | "dd";

export type TypographyProps = PropsWithChildren & {
  variant?: keyof AppTheme["typography"];
  component?: HTMLTextElement;
  color?: string;
}

// This styled component applies the styling based on the theme and props
const StyledTypography = styled(DynamicElement) <TypographyProps>`
  ${({ theme, variant, color }) => {
    if (!variant) {
      return '';
    }

    const variantStyles = theme.typography[variant];

    return `
      font-family: ${variantStyles.fontFamily || 'inherit'};
      font-size: ${variantStyles.fontSize || 'inherit'};
      font-weight: ${variantStyles.fontWeight || 'inherit'};
      line-height: ${variantStyles.lineHeight || 'inherit'};
      color: ${color || 'inherit'};
      margin: ${variantStyles.margin || 0};
      padding: 0;
    `;
  }}
`;

export const Typography: FC<TypographyProps> = ({
  variant = "body1",
  component,
  children,
  ...props
}) => {
  const resolveComponent = () => {
    if (component) return component;

    switch (variant) {
      case "body1":
      case "body2":
        return "p";
    }

    return variant || 'p';
  };

  return (
    <StyledTypography
      element={resolveComponent()}
      variant={variant}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};