import styled, { css } from 'styled-components';

interface ContainerProps {
  isField: boolean;
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 3.125rem;

  padding: 0 1rem;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.background};

  display: flex;
  align-items: center;

  transition: border 100ms;

  svg {
    stroke: ${({ theme }) => theme.colors.primary};
    transition: stroke 100ms;
    flex-shrink: 0;
  }

  & + div {
    margin-top: 0.5rem;
  }

  ${({ isErrored }) =>
    isErrored &&
    css`
      border-color: ${({ theme }) => theme.colors.error};

      svg {
        stroke: ${({ theme }) => theme.colors.error};
      }
    `}

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: ${({ theme }) => theme.colors.secondary};

      svg {
        stroke: ${({ theme }) => theme.colors.secondary};
      }
    `}

  ${({ isField }) =>
    isField &&
    css`
      border-color: ${({ theme }) => theme.colors.secondary};

      svg {
        stroke: ${({ theme }) => theme.colors.secondary};
      }
    `}

  input {
    flex: 1;
    border: none;
    padding: 1rem 0;
    background: transparent;

    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 1rem;
  }
`;
