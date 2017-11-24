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
<<<<<<< HEAD
	return (
	  <View style={styles.container}>
		<Text style={styles.title}>Personal information</Text>
		<TextInput style={styles.textInput} />
	  </View>
	)
=======
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
>>>>>>> 94ddf1eb50d9c2e49c88e14d5c8428ad3dec7ba7
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
<<<<<<< HEAD
	marginBottom: 10,
	borderWidth: 1,
	borderColor: '#000000',
	backgroundColor: '#FFFFFF',
	marginHorizontal: 10,
	padding: 10,
	borderRadius: 10,
	fontSize: 16
=======
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    fontFamily: Lato.regular
>>>>>>> 94ddf1eb50d9c2e49c88e14d5c8428ad3dec7ba7
  }
});
