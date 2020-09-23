import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1040px;
  min-height: calc(100vh - 8rem);

  margin: 0 auto;
  padding: 2rem 2rem 4rem;
`;

export const Banner = styled.nav`
  height: 4rem;
  background: ${({ theme }) => theme.colors.primary};

  main {
    width: 100%;
    height: 100%;
    max-width: 1040px;

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
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    flex: 1;
    height: 3.125rem;

    padding: 0 0.5rem;
    border-radius: 4px 0 0 4px;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    border-right: none;

    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  button {
    width: 3.125rem;
    height: 3.125rem;

    background: white;

    border-radius: 0;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    border-left: none;

    & + button {
      width: 6.25rem;

      border-radius: 0 4px 4px 0;
    }
  }
`;
