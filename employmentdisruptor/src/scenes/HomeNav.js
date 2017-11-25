import React from 'react'
import { StackNavigator } from 'react-navigation'
import HomeScene from './HomeScene'
import JobScene from './JobScene'
import TrainingScene from './TrainingScene'

export default StackNavigator({
  Mentors: {
    screen: HomeScene
  },
  Job: {
    screen: JobScene
  },
  Training: {
    screen: TrainingScene
  }
}, {
  navigationOptions: {
    gesturesEnabled: true
  }
})
