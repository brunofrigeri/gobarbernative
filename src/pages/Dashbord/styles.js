import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  font-size:20px;
  color: #FFF;
  font-weight: bold;
  align-self: center;
  margin-top:30px;
`;

export const List = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 }
})``;

export const Header = styled.View`
  align-self: center;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  align-self: center;
  margin-top:30px;
  padding-left: 4px;
  padding-right: 4px;
  font-weight: bold;
`;
