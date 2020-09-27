import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 48rem;
  min-height: calc(100vh - 4rem);

  margin: 0 auto;
  padding: 2rem 2rem 4rem;
`;

export const GenerateHashArea = styled.div`
  position: sticky;
  top: 0;

  width: 100%;

  padding: 2rem 1rem;
  background: ${({ theme }) => theme.colors.background};

  form {
    margin: 0 auto;
    max-width: 48rem;

    span {
      opacity: 0.5;
      display: block;
      margin-bottom: 0.7rem;
      color: ${({ theme }) => theme.colors.text};
    }

    > button {
      margin-top: 0.5rem;
      background: ${({ theme }) => theme.colors.primary};
    }

    div {
      border-color: ${({ theme }) => theme.colors.primary};

      svg {
        stroke: ${({ theme }) => theme.colors.primary};
      }
    }

    section {
      height: 3.125rem;
      margin-top: 0.5rem;

      display: flex;
      align-items: center;

      div {
        border-right: none;
        border-radius: 4px 0 0 4px;
      }

      button {
        height: 3.125rem;
        width: 4.25rem;

        margin-top: 0;
        background: none;
        border-radius: 0;

        border: 2px solid ${({ theme }) => theme.colors.primary};
        border-left: 0;
        border-right: 0;

        svg {
          stroke: ${({ theme }) => theme.colors.text}45;
        }

        display: flex;
        align-items: center;
        justify-content: center;

        & + button {
          width: 6.25rem;

          color: white;
          font-size: 1rem;

          border-radius: 0 4px 4px 0;
          background: ${({ theme }) => theme.colors.primary};

          transition: background 200ms;

          &:hover {
            background: ${({ theme }) => darken(0.06, theme.colors.primary)};
          }
        }
      }
    }
  }
`;

export const HashList = styled.div``;
