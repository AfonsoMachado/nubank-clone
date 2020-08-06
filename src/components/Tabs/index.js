import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, TabsContainer, TabItem, TabText, styles } from './styles';

function Tabs() {
  return (
    <Container>
      <TabsContainer style={TabItem}>
        <RectButton style={styles.b}>
          <Icon name="person-add" size={24} color="#FFF" />
          <TabText>Indicar amigos</TabText>
        </RectButton>
        <RectButton style={styles.b}>
          <Icon name="chat-bubble-outline" size={24} color="#FFF" />
          <TabText>Cobrar</TabText>
        </RectButton>
        <RectButton style={styles.b}>
          <Icon name="arrow-downward" size={24} color="#FFF" />
          <TabText>Depositar</TabText>
        </RectButton>
        <RectButton style={styles.b}>
          <Icon name="arrow-upward" size={24} color="#FFF" />
          <TabText>Transferir</TabText>
        </RectButton>
        <RectButton style={styles.b}>
          <Icon name="lock" size={24} color="#FFF" />
          <TabText>Bloquear cartão</TabText>
        </RectButton>
      </TabsContainer>
    </Container>
  );
}

export default Tabs;
