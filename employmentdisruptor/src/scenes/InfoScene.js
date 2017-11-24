import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class InfoScene extends Component {
  static navigationOptions = {
    title: 'Personal information'
  };
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      city: '',
      email: '',
      age: '',
      education: '',
      skills: []
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#3EEAFF'
  },
  textInput: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#FFFFFF'
  }
});
