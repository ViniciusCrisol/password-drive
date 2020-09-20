import styled, { css } from 'styled-components';

interface HashButtonProps {
  copied: boolean;
}

export const Container = styled.div`
  height: 100vh;

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

  @media (max-width: 1024px) {
    width: 100%;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 4rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  a {
    margin: 1.5rem 0;
    margin-left: auto;
    width: max-content;

    opacity: 0.5;
    cursor: pointer;
    font-size: 1.125rem;

    display: flex;
    align-items: center;

    &.create-account {
      width: unset;
      display: inline-block;

      margin-top: 2rem;
      margin-left: unset;
    }

    svg {
      margin-right: 0.5rem;
    }

    &:hover {
      opacity: 1;
      color: ${({ theme }) => theme.colors.primary};

      svg {
        stroke: ${({ theme }) => theme.colors.primary};
      }
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
`;

export const RightSide = styled.div<HashButtonProps>`
  width: 50%;
  height: 100%;

  padding: 2.5rem;
  background: ${({ theme }) => theme.colors.secondary};

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  div {
    width: 90%;
    position: relative;

    padding: 4rem 2rem;
    background: white;
    border-radius: 4px;

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

    section {
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
      height: 2.125rem;
      width: 8rem;

      background: none;
      border: 2px solid ${({ theme }) => theme.colors.secondary};

      font-size: 1.1rem;
      color: ${({ theme }) => theme.colors.secondary};

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
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
