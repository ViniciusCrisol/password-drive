import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
`;

export const LeftSide = styled.div`
  width: 50%;
  padding: 4rem;

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

export const RightSide = styled.div`
  width: 50%;
  height: 100%;

  padding: 2.5rem;
  background: ${({ theme }) => theme.colors.secondary};

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  div {
    width: 80%;

    padding: 4rem 2rem;
    background: white;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 1.625rem;
      color: ${({ theme }) => theme.colors.secondary};
    }

    button {
      height: 2.125rem;

      padding: 0 1rem;
      background: none;
      border: 2px solid ${({ theme }) => theme.colors.secondary};

      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors.secondary};

      transition: color 200ms, transform 200ms, border 200ms;

      &:hover {
        transform: translateY(-4px);
        color: ${({ theme }) => theme.colors.primary};
        border-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
