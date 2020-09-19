import React from 'react';
import Head from 'next/head';

import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>

      <h1>Dicas de uso</h1>
      <p> ⇨ Importar imagens svg como componente react</p>
      <p> ⇨ Declarar components como const's do tipo React.FC</p>
    </Container>
  );
};

export default Home;
