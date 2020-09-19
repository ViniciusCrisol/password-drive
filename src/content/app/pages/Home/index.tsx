import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiKey, FiLock, FiInfo } from 'react-icons/fi';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

import { Container, RightSide } from './styles';

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
      <RightSide>
        <header>
          <h2>Wellcome!</h2>
          <span>Sign and be safe with us.</span>
        </header>

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
      </RightSide>
    </Container>
  );
};

export default pages;
