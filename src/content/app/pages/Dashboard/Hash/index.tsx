import React from 'react';

import { Container } from './styles';

interface HashData {
  hash: Hash;
}

const Hash: React.FC<HashData> = ({ hash }) => {
  return (
    <Container>
      <h1>Hash</h1>
    </Container>
  );
};

export default Hash;
