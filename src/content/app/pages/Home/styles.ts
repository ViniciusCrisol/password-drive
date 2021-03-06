import styled, { css } from 'styled-components';
import ButtonContainer from '../../../../components/Button';

interface HashButtonProps {
  copied: boolean;
}

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  align-items: center;
`;

export const LeftSide = styled.div`
  width: 50%;
  padding: 2rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 4rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  a {
    margin-top: 1rem;
    font-size: 1.125rem;
    text-decoration: none;

    opacity: 0.5;
    display: inline-block;

    &:hover {
      opacity: 1;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  span {
    display: block;
    margin-top: 0.6rem;

    opacity: 0.5;
    font-size: 1.25rem;
  }

  form {
    width: 100%;
    margin-top: 4rem;
    max-width: 30.5rem;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const RightSide = styled.div`
  width: 50%;
  height: 100vh;

  padding: 2.5rem;
  background: ${({ theme }) => theme.colors.secondary};

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const GenerateHash = styled.div<HashButtonProps>`
  width: 90%;
  position: relative;

  padding: 4rem 2rem;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.background};

  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;

    opacity: 0;
    pointer-events: none;
  }

  div {
    h1 {
      font-size: 1.625rem;
      color: ${({ theme }) => theme.colors.secondary};
    }

    span {
      opacity: 0.5;
      font-size: 0.9rem;
    }
  }

  button {
    width: 8rem;
    height: 2.125rem;

    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.secondary};
    border: 2px solid ${({ theme }) => theme.colors.secondary};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: color 200ms, transform 200ms, border 200ms;

    svg {
      margin-right: 1rem;
      stroke: ${({ theme }) => theme.colors.secondary};

      transition: stroke 200ms;
    }

    &:hover {
      transform: scale(1.02);
      color: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};

      svg {
        stroke: ${({ theme }) => theme.colors.primary};
      }
    }

    ${({ copied }) =>
      copied &&
      css`
        color: ${({ theme }) => theme.colors.success};
        border-color: ${({ theme }) => theme.colors.success};

        svg {
          display: block;
          stroke: ${({ theme }) => theme.colors.success};
        }
      `}
  }
`;

export const Button = styled(ButtonContainer)`
  margin: 1.5rem 0;
`;
