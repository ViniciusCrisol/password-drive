import React, { useCallback, useRef, useState } from 'react';
import Link from 'next/link';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiKey, FiLock, FiUser } from 'react-icons/fi';

import hashConfig from '../../../../config/hashConfig';

import Logo from '../../../../components/Logo';
import Input from '../../../../components/Input';

import { Container, LeftSide, RightSide, Button } from './styles';

interface SignData {
  code: string;
  password: string;
}

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSignIn = useCallback((data: SignData) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <LeftSide>
        <div>
          <h1>Protect your accounts!</h1>
          <span>Don't use the same password on every site.</span>
          <h2>
            we encrypt all your data, be <strong>safe</strong> with us.
          </h2>
        </div>
      </LeftSide>

      <RightSide>
        <Logo />
        <Form onSubmit={handleSignIn} ref={formRef}>
          <Input icon={FiKey} name="code" placeholder="Code (Account login)" />
          <Input icon={FiUser} name="name" placeholder="First name" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Password"
          />

          <Input
            icon={FiLock}
            name="confirm_password"
            type="confirm_password"
            placeholder="Confirm password"
          />

          <Button type="submit">Register</Button>
        </Form>

        <Link href="/">
          <a className="login">I already have an account.</a>
        </Link>
      </RightSide>
    </Container>
  );
};

export default Register;
