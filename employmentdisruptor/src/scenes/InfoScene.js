import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class InfoScene extends Component {
  static navigationOptions = {
    title: 'Personal information'
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Juuh kova test</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#585858'
  }
});
