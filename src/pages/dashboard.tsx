import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { useUser } from '../hooks/useUser';

import Content from '../content/app/pages/Dashboard';

const Dashboard: React.FC = () => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

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
