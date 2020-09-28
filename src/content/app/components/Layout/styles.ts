import styled from 'styled-components';

export const Header = styled.header`
  height: 4rem;
  background: ${({ theme }) => theme.colors.primary};

  main {
    width: 100%;
    height: 100%;
    max-width: 48rem;

    margin: 0 auto;
    padding: 0 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: ${({ theme }) => theme.colors.buttonText};
      cursor: pointer;
      font-size: 1.2rem;
    }
  }
`;
