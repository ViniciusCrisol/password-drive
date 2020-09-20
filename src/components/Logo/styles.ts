import styled from 'styled-components';

export const Container = styled.div`
  width: 3.5rem;
  height: 3.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.secondary};
`;
