import React, { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { subDays, addDays, format } from 'date-fns'

import { Container, Title, List, Header, Button } from './styles';
import api from '../../services/api'
import Background from '../../components/Background'
import Appointments from '../../components/Appointments'
import {store} from '../../store'
import Schedule from '../../components/Schedule';

export default function Dashbord() {
  const [appointments, setAppointments] = useState([])
  const [schedule, setSchedule] = useState([])
  const [date, setDate] = useState(new Date())
  const provider = useSelector(state => state.auth.provider)

  const dateFormatted = useMemo(() => format(date, "d 'of' MMMM"), [date])

  useEffect(() => {
    if(!provider) {
      async function loadAppointments() {
        const response = await api.get('appointments')
        setAppointments(response.data)
      }

      loadAppointments()
    } else {
        async function loadSchedule() {
          const res = await api.get('schedule', {
            params: { date }
          })

          console.tron.log(res.data)
          setSchedule(res.data)
        }

      loadSchedule()
    }
  }, [date])


  async function nextDay() {
    setDate(addDays(date, 1))
  }

  async function previousDay() {
    setDate(subDays(date, 1))
  }


  async function handleCancel(id){
    const response = await api.delete(`appointments/${id}`)
    console.tron.log(response.data)
    setAppointments(
      appointments.map(appointment => appointment === id ? {
        ...appointment,
        canceled_at: response.data.canceled_at
      } : appointment)
    )
  }

  return (
    <Background>
      {provider ? (
        <Container>
          <Header>
            <Button onPress={previousDay}>
              <Icon name="keyboard-arrow-left" size={20} color="#fff"/>
            </Button>
            <Title>{dateFormatted}</Title>
            <Button onPress={nextDay}>
              <Icon name="keyboard-arrow-right" size={20} color="#fff" />
            </Button>
          </Header>
            <List
              data={schedule}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => <Schedule data={item} />}
            />
        </Container>
      ) : (
        <Container>
          <Title>Agendamentos</Title>
            <List
              data={appointments}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => <Appointments  onCancel={() => handleCancel(item.id)} data={item} />}
            />
        </Container>
      )}
    </Background>
  );
}

Dashbord.navigationOptions = () => {
  const {provider} = store.getState().auth

  return {
    tabBarLabel: provider ? 'Agendamentos2' : 'Agendamentos',
    tabBarIcon: ({ tintColor }) => <Icon name="event" size={20} color={tintColor} />
  }
}
