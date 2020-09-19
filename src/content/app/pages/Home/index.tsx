import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiKey, FiLock, FiInfo } from 'react-icons/fi';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

import { Container, LeftSide, RightSide } from './styles';

interface SignData {
  code: string;
  password: string;
}

const pages: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSignIn = useCallback((data: SignData) => {
    console.log(data);
  }, []);

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

      <RightSide>
        <div>
          <h1>Keep it simple.</h1>

          <button>Hash!</button>
        </div>
      </RightSide>
    </Container>
  );
};

export default pages;
