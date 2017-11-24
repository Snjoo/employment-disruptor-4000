import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import HomeScene from './src/scenes/HomeScene'
import SecondScene from './src/scenes/SecondScene'

const EmploymentDisruptor = TabNavigator({
  Home: { screen: HomeScene },
  SecondScene: { screen: SecondScene }
});

export default class App extends React.Component {
  render() {
    return (
      <EmploymentDisruptor />      
    )
  }
}
