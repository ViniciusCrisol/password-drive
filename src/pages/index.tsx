import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { useUser } from '../hooks/useUser';

import Content from '../content/app/pages/Home';

const Home: React.FC = () => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

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
