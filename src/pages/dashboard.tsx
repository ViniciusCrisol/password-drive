import React, { useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  console.log(params);

  try {
    const response = await axios.post('/api/list-hashes');
    // console.log(response.data);
  } catch (err) {
    // console.log(err.response.data);
  }

  return { props: { ok: true } };
};

export default Dashboard;
