import React, { useCallback, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import axios from 'axios';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiKey, FiLock, FiUser } from 'react-icons/fi';

import Logo from '../../../../components/Logo';
import Input from '../../../../components/Input';

import { Container, LeftSide, RightSide, Button } from './styles';

interface SignUpData {
  code: string;
  name?: string;
  password: string;
  confirm_password: string;
}

const Register: React.FC = () => {
  const router = useRouter();
  const formRef = useRef<FormHandles>(null);

  const [loading, setLoading] = useState(false);

  const handleSignIn = useCallback(async (data: SignUpData) => {
    try {
      await axios.post('/api/register', data);

      router.push('/');
    } catch (err) {
      console.log(err.response.data.message);
    }
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
            type="password"
            name="confirm_password"
            placeholder="Confirm password"
          />

          <Button loading={loading} type="submit">
            Register
          </Button>
        </Form>

        <Link href="/">
          <a className="login">I already have an account.</a>
        </Link>
      </RightSide>
    </Container>
  );
};

export default Register;
