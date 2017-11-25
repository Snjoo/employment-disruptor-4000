import React from 'react'
import { StackNavigator } from 'react-navigation'
import HomeScene from './HomeScene'

export default StackNavigator({
  Mentors: {
    screen: HomeScene,
  }
}, {
  navigationOptions: {
    gesturesEnabled: true,
    header: null
  }
})
