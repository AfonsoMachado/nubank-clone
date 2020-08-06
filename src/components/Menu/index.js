import React from 'react';
import QRCode from 'react-native-qrcode-svg';

import {Container, Code} from './styles';

export default function Menu() {
  return (
    <Container>
      <Code>
        <QRCode
          value="https://nubank.com.br/"
          size={80}
          backgroundColor="#fff"
          color="#8b10ae"
        />
      </Code>
    </Container>
  );
}
