import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1rem;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primaryLight};

  & + li {
    margin-top: 1.4rem;
  }

  > div {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    > input {
      position: absolute;
      left: 0;
      top: 0;

      width: 100%;
      height: 100%;
      opacity: 0;
      pointer-events: none;
    }

    @media (max-width: 580px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  border-color: ${({ theme }) => theme.colors.primary};

  svg {
    stroke: ${({ theme }) => theme.colors.primary};
  }

  h1 {
    padding-left: 4px;
    margin-bottom: 0.8rem;

    font-size: 1.3rem;
    font-weight: normal;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const InputContainer = styled.div`
  display: flex;

  input {
    width: 100%;
    height: 3.125rem;

    padding: 0 1rem;
    border-radius: 4px 0 0 4px;
    background: ${({ theme }) => theme.colors.background};

    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-right: 0;
  }

  button {
    width: 3.25rem;
    height: 3.125rem;

    margin-top: 0;
    padding: 0 1rem;
    background: ${({ theme }) => theme.colors.background};

    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-left: 0;
    border-right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      stroke: ${({ theme }) => theme.colors.text}45;
    }

    & + button {
      width: 4.25rem;

      font-size: 1rem;
      color: ${({ theme }) => theme.colors.buttonText};

      border: none;
      border-radius: 0 4px 4px 0;
      background: ${({ theme }) => theme.colors.primary};

      transition: background 200ms;

      &:hover {
        background: ${({ theme }) => darken(0.06, theme.colors.primary)};
      }
    }
  }
`;

export const SquareButton = styled.button`
  width: 3.125rem;
  height: 3.125rem;

  margin-left: 1rem;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;
  transition: background 200ms;

  svg {
    stroke: ${({ theme }) => theme.colors.background};
    transition: stroke 200ms;
  }

  & + button {
    margin-left: 1rem;
  }

  &:hover {
    background: ${({ theme }) => darken(0.06, theme.colors.primary)};
  }

  @media (max-width: 580px) {
    width: 100%;
    margin-left: 0;
    margin-top: 1rem;
  }
`;
