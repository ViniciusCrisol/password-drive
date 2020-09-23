import React, { useCallback, useRef, useState } from 'react';
import Link from 'next/link';
import crypto from 'crypto-random-string';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import hashConfig from '../../../../config/hashConfig';

import ActiveLink from '../../../../components/Link';

import { Container, Banner, GenerateHashArea } from './styles';
import { FiEyeOff } from 'react-icons/fi';

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const hashRef = useRef<HTMLInputElement>(null);

  const [hash, setHash] = useState(crypto(hashConfig));
  const [showHash, setShowHash] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerateHash = useCallback(() => {
    const generatedHash = crypto(hashConfig);

    setHash(generatedHash);
    setCopied(true);

    hashRef.current.select();
    document.execCommand('copy');
  }, [hashRef, crypto, setHash, setCopied]);

  const handleTogleHash = useCallback(() => {
    setShowHash(prevState => !prevState);
  }, [showHash]);

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

      <Container>
        <div>
          <GenerateHashArea>
            <input
              type={showHash ? 'text' : 'password'}
              readOnly
              ref={hashRef}
              value={hash}
            />

            <button onClick={handleTogleHash}>
              <FiEyeOff size={20} />
            </button>

            <button>Hash!</button>
          </GenerateHashArea>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
