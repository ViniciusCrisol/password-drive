import React from 'react';

import { Container } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: 'outline';
}

const Button: React.FC<ButtonProps> = ({ children, outline, ...rest }) => {
  return (
    <Container isOutlined={!!outline} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
