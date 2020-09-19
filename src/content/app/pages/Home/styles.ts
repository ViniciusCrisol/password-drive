import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  height: 100%;

  display: flex;
  align-items: center;
`;

export const RightSide = styled.div`
  width: 50%;
  padding: 4rem;

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
    width: max-content;

    margin: 1rem 0;
    margin-left: auto;

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

  header {
    text-align: center;

    h2 {
      margin-top: 2rem;
      font-size: 1.8rem;
      font-weight: lighter;
    }

    span {
      display: block;
      margin-top: 0.6rem;

      opacity: 0.5;
      font-size: 1.25rem;
    }
  }

  form {
    width: 100%;
    margin-top: 4rem;
    max-width: 30.5rem;
  }
`;
