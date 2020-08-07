import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Animated} from 'react-native';
// Movimento de arrastar para baixo
import {PanGestureHandler, State} from 'react-native-gesture-handler';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';
import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
} from './styles';
import {TabRouter} from 'react-navigation';

export default function Main() {
  // Guarda a informação de quantos pixel o usuario arrastou o menu pra baixo
  let offset = 0;

  const translateY = new Animated.Value(0);

  // Capta a posição que o usuario está arrastando o item, e manda ela para a variavel translateY
  const animatedEvent = Animated.event(
    [
      {
        // propriedades de y e x
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    // usa o driver nativo de animações do react native
    {useNativeDriver: true},
  );

  // informações do evento quando o usuario arrasta
  function onHandlerStateChange(event) {
    //  menu aberto ou fechado
    let opened = false;
    // Verifica se o estado enterior do evento é ativo, para saber se o usuario acabou a animação
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const {translationY} = event.nativeEvent;

      // Atualizando o valor real do quanto foi arrastado o menu
      offset += translationY;
      if (translationY >= 100) {
        opened = true;
        // Animação para colocar o menu para baixo a partir do range determinado
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        // função executada ao finalizar a animação
        offset = opened ? 380 : 0;

        // para que o menu não volte bruscamente
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}>
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    // Limites da translateY
                    inputRange: [-350, 0, 380],
                    outputRange: [-50, 0, 380],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 7.611,65</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferência de R$ 20,00 recebida de Fulano hoje às 06:00h
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY} />
    </Container>
  );
}
