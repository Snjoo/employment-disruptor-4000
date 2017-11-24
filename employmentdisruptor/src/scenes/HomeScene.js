import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class HomeScene extends Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Elikkäs test</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#757575'
  }
});
