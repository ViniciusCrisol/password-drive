import React from 'react';

import Loader from '../Loader';

import { Container } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: 'outline';
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  outline,
  loading,
  ...rest
}) => {
  return (
    <Container disabled={loading} isOutlined={!!outline} {...rest}>
      {loading ? <Loader /> : <>{children}</>}
    </Container>
  );
};

export default Button;
