import React from 'react';
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, Left, Avatar, Info, Name } from './styles';

export default function Appointments({ data }) {
  console.tron.log(data.avatar)
  return (
    <Container>
     <Left>
       <Avatar source={data.avatar ? { uri: data.avatar.url } : null} />
        <Info>
          <Name>{data.name}</Name>
        </Info>
      </Left>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="event-available" size={20} color="#3CB371" />
      </TouchableOpacity>
    </Container>
  )
}
