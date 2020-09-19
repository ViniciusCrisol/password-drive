import styled, { css } from 'styled-components';
import { darken } from 'polished';

interface ButtonProps {
  isOutlined: boolean;
}

export const Container = styled.button<ButtonProps>`
  width: 100%;
  height: 3.125rem;

  padding: 0 4px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primary};

  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.buttonText};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background 200ms;

  &:hover {
    background: ${({ theme }) => darken(0.06, theme.colors.primary)};
  }
`;
