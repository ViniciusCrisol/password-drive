import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 48rem;
  min-height: calc(100vh - 4rem);

  margin: 0 auto;
`;

export const CreateHashArea = styled.div`
  position: sticky;
  z-index: 2;
  top: 0;

  width: 100%;
  padding: 2rem 1rem 0;
  background: ${({ theme }) => theme.colors.background};

  form {
    width: 100%;
    margin: 0 auto;

    span {
      opacity: 0.5;
      display: block;
      font-size: 1rem;

      padding-left: 4px;
      margin-bottom: 0.7rem;
    }

    > button {
      margin-top: 0.5rem;
    }

    div {
      border-color: ${({ theme }) => theme.colors.primary};

      svg {
        stroke: ${({ theme }) => theme.colors.primary};
      }

      button {
        svg {
          stroke: ${({ theme }) => theme.colors.text}45;
        }
      }
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;

  > div {
    width: calc(100% - 7.5rem);

    border-right: none;
    border-radius: 4px 0 0 4px;
  }

  button {
    width: 3.25rem;
    height: 3.125rem;

    margin-top: 0;
    padding: 0 1rem;
    border-radius: 0;

    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-left: 0;
    border-right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    & + button {
      width: 4.25rem;

      color: ${({ theme }) => theme.colors.buttonText};
      font-size: 1rem;

      border: 0;
      border-radius: 0 4px 4px 0;
      background: ${({ theme }) => theme.colors.primary};

      transition: background 200ms;

      &:hover {
        background: ${({ theme }) => darken(0.06, theme.colors.primary)};
      }
    }
  }
`;

export const HashList = styled.ul`
  padding: 2rem 1rem;
`;
