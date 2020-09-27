import React, { useCallback, useRef, useState } from 'react';
import axios from 'axios';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import crypto from 'crypto-random-string';
import { FiLink2, FiShield, FiEye, FiEyeOff } from 'react-icons/fi';

import hashConfig from '../../../../config/hashConfig';
import { useFetch } from '../../../../hooks/useFetch';

import Layout from '../../components/Layout';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

import Hash from './Hash';

import { Container, GenerateHashArea, HashList } from './styles';

interface CreateHashData {
  website: string;
  password: string;
}

const Dashboard: React.FC = () => {
  const { data: hashes } = useFetch<Hash[]>('/api/list-hashes');
  const [showHash, setShowHash] = useState(false);

  const formRef = useRef<FormHandles>(null);

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

  if (!hashes) {
    return <h1>loading...</h1>;
  }

  return (
    <Layout>
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
                maxLength={16}
                name="password"
                icon={FiShield}
                type={showHash ? 'text' : 'password'}
              />

              <button type="button" onClick={handleTogleHash}>
                {showHash ? <FiEyeOff size={19} /> : <FiEye size={19} />}
              </button>

              <button type="button" onClick={handleGenerateHash}>
                Hash!
              </button>
            </section>

            <Button type="submit">Create Register</Button>
          </Form>
        </GenerateHashArea>

        <HashList>
          {hashes.map(hash => (
            <Hash key={hash.id} hash={hash} />
          ))}
          {hashes.map(hash => (
            <Hash key={hash.id} hash={hash} />
          ))}
          {hashes.map(hash => (
            <Hash key={hash.id} hash={hash} />
          ))}
        </HashList>
      </Container>
    </Layout>
  );
};

export default Dashboard;
