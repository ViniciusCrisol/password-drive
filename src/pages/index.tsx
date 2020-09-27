import React from 'react';
import Head from 'next/head';

import Content from '../content/app/pages/Home';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Content />
    </>
  );
};

export default Home;
