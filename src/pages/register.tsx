import React from 'react';
import Head from 'next/head';

import Content from '../content/app/pages/Register';

const Register: React.FC = () => {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>

      <Content />
    </>
  );
};

export default Register;
