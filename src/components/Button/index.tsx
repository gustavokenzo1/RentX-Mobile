import React from 'react';

import { Container, Title } from './styles';

interface Props {
  title: string;
  color?: string;
}

export function Button({
  title,
  color,
  ...rest
}) {
  return (
    <Container {...rest} color={color}>
      <Title> {title} </Title>
    </Container>
  );
}