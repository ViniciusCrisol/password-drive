import React, { useCallback, useRef, useState } from 'react';
import Link from 'next/link';
import crypto from 'crypto-random-string';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import hashConfig from '../../../../config/hashConfig';

import ActiveLink from '../../../../components/Link';

import { Container, Banner } from './styles';

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const hashRef = useRef<HTMLInputElement>(null);

  const [hash, setHash] = useState(crypto(hashConfig));
  const [copied, setCopied] = useState(false);

  const handleGenerateHash = useCallback(() => {
    const generatedHash = crypto(hashConfig);

    setHash(generatedHash);
    setCopied(true);

    hashRef.current.select();
    document.execCommand('copy');
  }, [hashRef, crypto, setHash, setCopied]);

  return (
    <>
      <Banner>
        <main>
          <Link href="/dashboard">
            <h1>Keep it safe.</h1>
          </Link>
          <section>
            <ActiveLink href="/dashboard">Account</ActiveLink>
          </section>
        </main>
      </Banner>

      <Container></Container>
    </>
  );
};

export default Dashboard;
