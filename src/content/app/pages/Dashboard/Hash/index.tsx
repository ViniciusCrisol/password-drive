import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiShield, FiEyeOff, FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';

import Input from '../../../../../components/Input';
import Button from '../../../../../components/Button';

import { Container } from './styles';

interface HashData {
  hash: Hash;
}

const Hash: React.FC<HashData> = ({ hash }) => {
  const [showHash, setShowHash] = useState(false);

  const formRef = useRef<FormHandles>(null);
  const passwordValue = useRef<HTMLInputElement>(null);

  const handleSubmitForm = useCallback(async (data: Object) => {
    try {
      console.log(data);
    } catch (err) {
      console.log(err.response.data.message);
    }
  }, []);

  const handleTogleHash = useCallback(() => {
    setShowHash(prevState => !prevState);
  }, [showHash]);

  const handleCopyValue = useCallback(() => {
    passwordValue.current.select();
    document.execCommand('copy');
  }, [formRef]);

  return (
    <Container>
      <div>
        <h1>{hash.website}</h1>
        <Form
          ref={formRef}
          onSubmit={data => handleSubmitForm(data)}
          initialData={{ password: hash.password }}
        >
          <Input
            readOnly={false}
            maxLength={16}
            name="password"
            icon={FiShield}
            type={showHash ? 'text' : 'password'}
          />

          <button type="button" onClick={handleTogleHash}>
            {showHash ? <FiEyeOff size={19} /> : <FiEye size={19} />}
          </button>

          <button type="button" onClick={handleCopyValue}>
            Copy!
          </button>
        </Form>
      </div>

      <section>
        <button type="button">
          <FiEdit2 size={19} />
        </button>

        <button type="button">
          <FiTrash2 size={19} />
        </button>
      </section>

      <input type="text" readOnly ref={passwordValue} value={hash.password} />
    </Container>
  );
};

export default Hash;
