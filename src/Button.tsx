import styled from '@emotion/styled';
import { type ButtonHTMLAttributes, type FC } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button<ButtonProps & { softDisabled?: boolean }>`
  background-color: ${({ theme, softDisabled }) => softDisabled ? theme.palette.primary.main : 'hotpink'};
  transition: background-color 0.3s ease;
`;

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