import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.li`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primaryLight};

  & + li {
    margin-top: 1.4rem;
  }

  h1 {
    opacity: 0.5;
    padding-left: 4px;

    font-size: 1rem;
    font-weight: normal;
    text-transform: capitalize;
  }

  > input {
    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;

    opacity: 0;
    pointer-events: none;
  }

  div {
    width: 100%;
    border-color: ${({ theme }) => theme.colors.primary};

    svg {
      stroke: ${({ theme }) => theme.colors.primary};
    }

    form {
      margin-top: 0.5rem;

      display: flex;
      align-items: center;

      div {
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

          color: ${({ theme }) => theme.colors.buttonText};
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
