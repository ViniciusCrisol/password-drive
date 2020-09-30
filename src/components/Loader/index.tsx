import React from 'react';

import { Container } from './styles';

const Loader: React.FC = () => (
  <Container>
    <div className="bounce1" />
    <div className="bounce2" />
    <div className="bounce3" />
  </Container>
);

export default Loader;
