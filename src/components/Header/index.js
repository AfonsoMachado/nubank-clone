import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '~/assets/Nubank_Logo.png';

import {Container, Top, Logo, Title} from './styles';

function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Afonso Machado</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
    </Container>
  );
}

export default Header;
