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
import Loader from './Loader';

import { Container, CreateHashArea, HashList, InputContainer } from './styles';

interface CreateHashData {
  website: string;
  password: string;
}

const Dashboard: React.FC = () => {
  const { data: hashes, mutate } = useFetch<Hash[]>('/api/list-hashes');
  const formRef = useRef<FormHandles>(null);

  const [showHash, setShowHash] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmitForm = useCallback(async (data: CreateHashData) => {
    setLoading(true);
    try {
      mutate();
      await axios.post('/api/create-hash', data);
      const response = await axios.get('/api/list-hashes');

      const generatedHash = crypto(hashConfig);

      formRef.current.setFieldValue('password', generatedHash);

      mutate(response.data, false);
    } catch (err) {
      console.log(err.response.data.message);
    }
    setLoading(false);
  }, []);

  const handleGenerateHash = useCallback(() => {
    const generatedHash = crypto(hashConfig);

    formRef.current.setFieldValue('password', generatedHash);
  }, [crypto, formRef]);

  const handleTogleHash = useCallback(() => {
    setShowHash(prevState => !prevState);
  }, [showHash]);

  return (
    <Layout>
      <Container>
        <CreateHashArea>
          <Form
            ref={formRef}
            onSubmit={handleSubmitForm}
            initialData={{ password: crypto(hashConfig) }}
          >
            <span>Register a new hash</span>
            <Input placeholder="Website name" icon={FiLink2} name="website" />

            <InputContainer>
              <Input
                maxLength={16}
                name="password"
                icon={FiShield}
                placeholder="Password"
                type={showHash ? 'text' : 'password'}
              />

              <button type="button" onClick={handleTogleHash}>
                {showHash ? <FiEyeOff size={19} /> : <FiEye size={19} />}
              </button>

              <button type="button" onClick={handleGenerateHash}>
                Hash!
              </button>
            </InputContainer>

            <Button loading={loading} type="submit">
              Create Register
            </Button>
          </Form>
        </CreateHashArea>

        <HashList>
          {hashes ? (
            hashes.map(hash => <Hash key={hash.id} hash={hash} />)
          ) : (
            <Loader />
          )}
        </HashList>
      </Container>
    </Layout>
  );
};

export default Dashboard;
