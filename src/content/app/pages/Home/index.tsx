import React, { useCallback, useRef, useState } from 'react';
import crypto from 'crypto-random-string';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiKey, FiLock, FiInfo, FiShield, FiShieldOff } from 'react-icons/fi';

import hashConfig from '../../../../config/hashConfig';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

import { Container, LeftSide, RightSide } from './styles';

interface SignData {
  code: string;
  password: string;
}

const pages: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const hashRef = useRef<HTMLInputElement>(null);

  const [hash, setHash] = useState(crypto(hashConfig));
  const [copied, setCopied] = useState(false);

  const handleSignIn = useCallback((data: SignData) => {
    console.log(data);
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
        <Form onSubmit={handleSignIn} ref={formRef}>
          <Input icon={FiKey} name="code" placeholder="Code" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Password"
          />

          <a>
            <FiInfo size={20} />
            Forgot Password
          </a>

          <Button type="submit">Entrar</Button>
        </Form>

        <a className="create-account">Don't have an account? Create a here.</a>
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

export default pages;
