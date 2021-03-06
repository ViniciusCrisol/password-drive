import React, { useCallback, useRef, useState } from 'react';
import Link from 'next/link';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import crypto from 'crypto-random-string';
import { FiKey, FiLock, FiShield, FiShieldOff } from 'react-icons/fi';

import { useAuth } from '../../../../hooks/useAuth';
import hashConfig from '../../../../config/hashConfig';

import Logo from '../../../../components/Logo';
import Input from '../../../../components/Input';

import { Container, LeftSide, RightSide, GenerateHash, Button } from './styles';

const Home: React.FC = () => {
  const { signIn } = useAuth();

  const formRef = useRef<FormHandles>(null);
  const hashRef = useRef<HTMLInputElement>(null);

  const [hash, setHash] = useState(crypto(hashConfig));
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignIn = useCallback(async (data: SignData) => {
    setLoading(true);
    await signIn(data);
    setLoading(false);
  }, []);

  const handleGenerateHash = useCallback(() => {
    const generatedHash = crypto(hashConfig);

    setHash(generatedHash);
    setCopied(true);

    hashRef.current.select();
    document.execCommand('copy');
  }, [hashRef, crypto, setHash, setCopied]);

  return (
    <Container>
      <LeftSide>
        <Logo />
        <Form onSubmit={handleSignIn} ref={formRef}>
          <Input icon={FiKey} name="code" placeholder="Code" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Password"
          />

          <Button loading={loading} type="submit">
            Access
          </Button>
        </Form>

        <Link href="/register">
          <a>Don't have an account? Create a here.</a>
        </Link>
      </LeftSide>

      <RightSide>
        <GenerateHash copied={copied}>
          <div>
            <h1>Keep it safe.</h1>
            <span>
              Click to generate and <br />
              copy a new hash!
            </span>
          </div>

          <button onClick={handleGenerateHash}>
            {copied ? <FiShield size={20} /> : <FiShieldOff size={20} />}
            Hash!
          </button>

          <input type="text" readOnly ref={hashRef} value={hash} />
        </GenerateHash>
      </RightSide>
    </Container>
  );
};

export default Home;
