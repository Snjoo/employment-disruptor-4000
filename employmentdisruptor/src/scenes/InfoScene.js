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
      skills: ''
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
        <TextInput
          style={styles.textInput}
          placeholder='City'
          value={this.state.city}
          onChangeText={(text) => this.setState({city: text})}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Email'
          value={this.state.email}
          keyboardType='email-address'
          onChangeText={(text) => this.setState({email: text})}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Age'
          keyboardType='numeric'
          value={this.state.age}
          onChangeText={(text) => this.setState({age: text})}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Education'
          value={this.state.education}
          onChangeText={(text) => this.setState({education: text})}
        />
        <TextInput
          style={[styles.textInput, styles.multiline]}
          placeholder='Skills'
          value={this.state.skills}
          multiline={true}
          onChangeText={(text) => this.setState({skills: text})}
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
  },
  multiline: {
    height: 200
  }
});
