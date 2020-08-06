import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

// Estilização para pressionamento em botão
export const styles = StyleSheet.create({
  b: {
    width: 100,
    height: 100,
    backgroundColor: '#ffffff33',
    borderRadius: 3,
    marginLeft: 10,
    padding: 10,
    justifyContent: 'space-between',
  },
});

export const Container = styled.View`
  height: 100px;
  margin-top: 20px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
  showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;
`;

export const TabText = styled.Text`
  font-size: 13px;
  color: #fff;
`;
