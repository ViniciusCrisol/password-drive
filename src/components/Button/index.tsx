import React from 'react';

import Loader from '../Loader';

import { Container } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: 'outline';
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  loading,
  outline,
  children,
  ...rest
}) => (
  <Container disabled={loading} isOutlined={!!outline} {...rest}>
    {loading ? <Loader /> : <>{children}</>}
  </Container>
);

export default Button;
