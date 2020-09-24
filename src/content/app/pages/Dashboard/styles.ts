import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 48rem;
  min-height: calc(100vh - 4rem);

  margin: 0 auto;
  padding: 2rem 2rem 4rem;
`;

export const Banner = styled.nav`
  height: 4rem;
  background: ${({ theme }) => theme.colors.primary};

  main {
    width: 100%;
    height: 100%;
    max-width: 48rem;

    margin: 0 auto;
    padding: 0 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: ${({ theme }) => theme.colors.buttonText};
      cursor: pointer;
      font-size: 1.2rem;
    }

    section {
      display: flex;
      align-items: center;

      a {
        color: ${({ theme }) => theme.colors.buttonText};
        font-weight: bold;
        text-decoration: none;

        transition: color 200ms;

        &:hover,
        &.active {
          color: ${({ theme }) => theme.colors.buttonText};
        }
      }
    }
  }
`;

export const GenerateHashArea = styled.div`
  position: sticky;
  top: 0;

  width: 100%;

  padding: 2rem 1rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.text}40;

  form {
    margin: 0 auto;
    max-width: 48rem;

    span {
      opacity: 0.5;
      display: block;
      margin-bottom: 0.5rem;
      color: ${({ theme }) => theme.colors.text};
    }

    button {
      margin-top: 0.5rem;
      background: ${({ theme }) => theme.colors.primary};
    }

    div {
      border-color: ${({ theme }) => theme.colors.primary};

      svg {
        stroke: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
