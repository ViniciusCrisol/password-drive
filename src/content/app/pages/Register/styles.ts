import styled from 'styled-components';
import ButtonContainer from '../../../../components/Button';

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  align-items: center;
`;

export const RightSide = styled.div`
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

  a {
    width: unset;
    display: inline-block;

    margin-top: 0.5rem;

    opacity: 0.5;
    cursor: pointer;
    font-size: 1.125rem;
    text-decoration: none;

    &:hover {
      opacity: 1;
      color: ${({ theme }) => theme.colors.primary};

      svg {
        stroke: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export const LeftSide = styled.div`
  width: 50%;
  height: 100vh;

  padding: 2.5rem;
  background: ${({ theme }) => theme.colors.secondary};

  text-align: center;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1024px) {
    display: none;
  }

  div {
    width: max-content;

    padding: 2rem;
    background:   background: ${({ theme }) => theme.colors.background};
;
    border-radius: 4px;

    h1 {
      font-size: 1.625rem;
      color: ${({ theme }) => theme.colors.secondary};
    }

    span,
    h2 {
      opacity: 0.5;

      font-size: 1rem;
      font-weight: 500;
      line-height: 2rem;
    }

    h2 {
      font-size: 1rem;
      margin-top: 2rem;
      color: rgba(1, 0, 1, 0.5);

      opacity: 1;

      strong {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.colors.success};
      }
    }
  }
`;

export const Button = styled(ButtonContainer)`
  margin: 1.5rem 0;
`;
