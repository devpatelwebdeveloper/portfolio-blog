import React from 'react';

interface TextProps {
  name: string;
}

const Button: React.FC<TextProps> = ({ name }) => {
  return <div>Test, {name}!</div>;
};

export default Button;