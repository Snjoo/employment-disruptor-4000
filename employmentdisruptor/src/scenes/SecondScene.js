import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class SecondScene extends Component {
  static navigationOptions = {
    title: 'Juuh'
  };
  render() {
    return <Text>Hello, elikkäs!</Text>;
  }
}
