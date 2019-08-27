import { createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

import Dashboard from './pages/Dashbord'
import Profile from './pages/Profile'
import NewAppointment from './pages/NewAppointment'

export default (isSigned = false) => createAppContainer(
  createSwitchNavigator({
    Sign: createSwitchNavigator({
      SignIn,
      SignUp
    }),
    App: createBottomTabNavigator({
      Dashboard,
      NewAppointment,
      Profile
    }, {
      tabBarOptions: {
        keyboardHidesTabBar: true,
        activeTintColor: '#FFF',
        inactiveTintColor: 'rgba(255,255,255,0.6)',
        style: {
          backgroundColor: '#8d41a8'
        }
      }
    })
  }, {
    initialRouteName: isSigned ? 'App' : 'Sign'
  })
)
