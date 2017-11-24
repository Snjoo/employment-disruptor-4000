import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import HomeScene from './src/scenes/HomeScene'
import InfoScene from './src/scenes/InfoScene'

const EmploymentDisruptor = TabNavigator({
  Home: { screen: HomeScene },
  InfoScene: { screen: InfoScene }
});

export default class App extends React.Component {
  render() {
    return (
      <EmploymentDisruptor />
    )
  }
}
