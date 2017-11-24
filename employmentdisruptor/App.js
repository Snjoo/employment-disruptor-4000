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
    return <EmploymentDisruptor />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
