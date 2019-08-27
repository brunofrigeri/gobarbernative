import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native'
import { parseISO, formatRelative } from 'date-fns'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Appointments({ data, onCancel }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      addSufix: true
    })
  }, [data.date])

  return (
    <Container past={data.past}>
     <Left>
        <Avatar source={{ uri: data.provider.avatar.url }} />

        <Info>
          <Name>{data.provider.name}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>
      {data.cancelable && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      )}
    </Container>
  )
}
