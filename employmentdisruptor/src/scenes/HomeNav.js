import React from 'react'
import { StackNavigator } from 'react-navigation'
import HomeScene from './HomeScene'
import JobScene from './JobScene'

export default StackNavigator({
  Mentors: {
    screen: HomeScene
  },
  Job: {
    screen: JobScene
  }
}, {
  navigationOptions: {
    gesturesEnabled: true,
    header: null
  }
})
