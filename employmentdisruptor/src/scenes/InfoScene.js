import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import { Roboto, Lato } from '../fonts'

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
        <Text style={styles.title}>Personal information</Text>
        <TextInput
          style={styles.textInput}
          placeholder='Name'
          value={this.state.name}
          onChangeText={(text) => this.setState({name: text})}
        />
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
  title: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 24,
    padding: 10,
    fontFamily: Roboto.bold
  },
  textInput: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    fontFamily: Lato.regular
  }
});
