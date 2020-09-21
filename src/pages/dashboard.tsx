import React from 'react';
import Head from 'next/head';

import Content from '../content/app/pages/Dashboard';

const Dashboard: React.FC = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <Content />
    </>
  );
};

export default Dashboard;
