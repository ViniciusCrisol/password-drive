import React, { useCallback, useRef, useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import crypto from 'crypto-random-string';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiLink2, FiShield, FiEye, FiEyeOff } from 'react-icons/fi';

import hashConfig from '../../../../config/hashConfig';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import ActiveLink from '../../../../components/Link';

import { Container, Header, GenerateHashArea } from './styles';

interface CreateHashData {
  password: string;
  website: string;
}

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [showHash, setShowHash] = useState(false);

  const handleSubmitForm = useCallback(async (data: CreateHashData) => {
    try {
      await axios.post('/api/create-hash', data);
    } catch (err) {
      console.log(err.response.data.message);
    }
  }, []);

  const handleGenerateHash = useCallback(() => {
    const generatedHash = crypto(hashConfig);

    formRef.current.setFieldValue('password', generatedHash);
  }, [crypto, formRef]);

  const handleTogleHash = useCallback(() => {
    setShowHash(prevState => !prevState);
  }, [showHash]);

  // useEffect(() => {
  //   async function getInitialData() {
  //     try {
  //       const response = await axios.post('/api/list-hashes');

  //       console.log(response.data);
  //     } catch (err) {
  //       console.log(err.response.data.message);
  //     }
  //   }
  //   getInitialData();
  // }, []);

  return (
    <>
      <Header>
        <main>
          <Link href="/dashboard">
            <h1>Keep it safe.</h1>
          </Link>
          <section>
            <ActiveLink href="/dashboard">Account</ActiveLink>
          </section>
        </main>
      </Header>

      <Container>
        <GenerateHashArea>
          <Form
            ref={formRef}
            onSubmit={data => handleSubmitForm(data)}
            initialData={{ password: crypto(hashConfig) }}
          >
            <span>Register a new hash</span>
            <Input placeholder="Website name" icon={FiLink2} name="website" />

            <section>
              <Input
                name="password"
                icon={FiShield}
                type={showHash ? 'text' : 'password'}
              />
              <button onClick={handleTogleHash}>
                {showHash ? <FiEyeOff size={19} /> : <FiEye size={19} />}
              </button>

              <button onClick={handleGenerateHash}>Hash!</button>
            </section>

            <Button type="submit">Create Register</Button>
          </Form>
        </GenerateHashArea>
      </Container>
    </>
  );
};

export default Dashboard;
