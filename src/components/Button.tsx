import styled from '@emotion/styled';
import { type ButtonHTMLAttributes, type FC } from 'react';
import { Typography } from './Typography';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'primary' | 'secondary' | 'default';
  htmlDisabled?: boolean | null;
};

const StyledButton = styled.button<ButtonProps & { softDisabled?: boolean }>`
  ${({ theme, color = 'default', softDisabled }) => `
    background-color: ${softDisabled ? theme.palette[color].light : theme.palette[color].main};
    transition: background-color 0.3s ease;
    border: none;
    color: ${softDisabled ? theme.palette.grey[600] : theme.palette[color].contrastText};
    padding: ${theme.spacing()} ${theme.spacing(2)};
    border-radius: ${theme.borderRadius};
    cursor: ${softDisabled ? 'not-allowed' : 'pointer'};

    &:hover {
      background-color: ${theme.palette[color].light};
    }

    &:disabled {
      background-color: ${color ? theme.palette[color].light : theme.palette.grey[300]};
      color: ${theme.palette.grey[600]};
      cursor: not-allowed;
      pointer-events: none;
    }
  `}`;

export const Button: FC<ButtonProps> = ({
  children,
  type = 'button',
  onClick,
  disabled,
  htmlDisabled: trueDisabled,
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
    <StyledButton
      disabled={trueDisabled ?? undefined}
      softDisabled={disabled}
      type={type}
      onClick={handleClick}
      {...props}
    >
      <Typography>{children}</Typography>
    </StyledButton>
  );
};