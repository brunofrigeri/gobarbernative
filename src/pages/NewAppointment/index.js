import React, {useEffect, useState} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, Title, List } from './styles';
import api from '../../services/api'
import Background from '../../components/Background'
import Providers from '../../components/Providers'

export default function NewAppointment() {
  const [providers, setProviders] = useState([])

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('providers')
      setProviders(response.data)
    }

    loadProviders()
  }, [])
  return (
    <Background>
      <Container>
        <Title>Prestadores de Serviços</Title>
        <List
          data={providers}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Providers data={item} />}
        />
      </Container>
    </Background>
  );
}

NewAppointment.navigationOptions = {
  tabBarLabel: 'Marcar novo',
  tabBarIcon: ({ tintColor }) => <Icon name="add" size={20} color={tintColor} />
}
