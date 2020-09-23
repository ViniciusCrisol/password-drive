import React, { useCallback, useRef, useState } from 'react';
import crypto from 'crypto-random-string';
import Link from 'next/link';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiKey, FiLock, FiInfo, FiShield, FiShieldOff } from 'react-icons/fi';

import hashConfig from '../../../../config/hashConfig';

import { useUser } from '../../../../hooks/useUser';

import Logo from '../../../../components/Logo';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

import { Container, LeftSide, RightSide } from './styles';

const Home: React.FC = () => {
  const { signIn } = useUser();

  const formRef = useRef<FormHandles>(null);
  const hashRef = useRef<HTMLInputElement>(null);

  const [hash, setHash] = useState(crypto(hashConfig));
  const [copied, setCopied] = useState(false);

  const handleSignIn = useCallback(async (data: SignData) => {
    signIn(data);
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

          <Link href="/register">
            <a>
              <FiInfo size={20} />
              Forgot Password
            </a>
          </Link>

          <Button type="submit">Access</Button>
        </Form>

        <Link href="/register">
          <a className="create-account">
            Don't have an account? Create a here.
          </a>
        </Link>
      </LeftSide>

      <RightSide copied={copied}>
        <div>
          <section>
            <h1>Keep it safe.</h1>
            <span>
              Click to generate and <br />
              copy a new hash!
            </span>
          </section>

          <button onClick={handleGenerateHash}>
            {copied ? <FiShield size={20} /> : <FiShieldOff size={20} />}
            Hash!
          </button>

          <input type="text" readOnly ref={hashRef} value={hash} />
        </div>
      </RightSide>
    </Container>
  );
};

export default Home;
