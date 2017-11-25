import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import HomeNav from './src/scenes/HomeNav'
import InfoScene from './src/scenes/InfoScene'
import Storage from 'react-native-storage'
import { AsyncStorage } from 'react-native'
import { Roboto, Lato } from './src/fonts'

const EmploymentDisruptor = TabNavigator({
  Home: { screen: HomeNav },
  InfoScene: { screen: InfoScene }
}, {
  swipeEnabled: true,
  tabBarOptions: {
    activeBackgroundColor: '#F6F6F6',
    labelStyle: { fontSize: 16, color: '#000000', fontFamily: Roboto.bold, flex: 1, alignItems: 'center', justifyContent: 'center'},
    style: {
      backgroundColor: 'white'
    },
  }
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
