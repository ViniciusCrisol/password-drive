import React, { useCallback, useRef, useState } from 'react';
import Link from 'next/link';
import crypto from 'crypto-random-string';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiLink2, FiShield } from 'react-icons/fi';

import hashConfig from '../../../../config/hashConfig';

import Input from '../../../../components/Input';
import ActiveLink from '../../../../components/Link';

import { Container, Banner, GenerateHashArea } from './styles';
import Button from '../../../../components/Button';

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
        <GenerateHashArea>
          <Form
            onSubmit={data => console.log(data)}
            ref={formRef}
            initialData={{ hash: crypto(hashConfig) }}
          >
            <span>Register a new hash</span>
            <Input placeholder="Website name" icon={FiLink2} name="name" />
            <div>
              <Input readOnly name="hash" type="password" icon={FiShield} />
            </div>

            <Button type="submit">Create Register</Button>
          </Form>
        </GenerateHashArea>
      </Container>
    </>
  );
};

export default Dashboard;
