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
import Storage from 'react-native-storage'
import { AsyncStorage } from 'react-native'

const EmploymentDisruptor = TabNavigator({
  Home: { screen: HomeScene },
  InfoScene: { screen: InfoScene }
});

const storage = new Storage({
	size: 1000,
	storageBackend: AsyncStorage,
	defaultExpires: 1000 * 3600 * 24,
	enableCache: true,
	sync : {
	}
})

global.storage = storage;

export default class App extends React.Component {
  render() {
    return (
      <EmploymentDisruptor />
    )
  }
}
