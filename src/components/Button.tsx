import styled from '@emotion/styled';
import { type ButtonHTMLAttributes, type FC } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'primary' | 'secondary' | 'default';
};

const StyledButton = styled.button<ButtonProps & { softDisabled?: boolean }>`
  ${({ theme, color = 'default', softDisabled }) => `
    background-color: ${softDisabled ? theme.palette[color].light : theme.palette[color].main};
    transition: background-color 0.3s ease;
    border: none;
    color: ${softDisabled ? theme.palette.grey[600] : theme.palette[color].contrastText};
    font-size: ${theme.typography.body1.fontSize};
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.body1.fontWeight};
    line-height: ${theme.typography.body1.lineHeight};
    padding: ${theme.spacing()} ${theme.spacing(2)};
    border-radius: ${theme.borderRadius};
  `}`;

export const Button: FC<ButtonProps> = ({
  children,
  type = 'button',
  onClick,
  disabled,
  ...props
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();

    } else {
      onClick?.(event);
    }
  };

  return (
    <StyledButton softDisabled={disabled} type={type} onClick={handleClick} {...props}>
      {children}
    </StyledButton>
  );
};