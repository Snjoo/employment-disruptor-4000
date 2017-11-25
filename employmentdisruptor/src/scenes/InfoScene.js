import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ScrollView
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
  componentWillMount() {
    storage.load({
    	key: 'personalInformation',
    	autoSync: true,
    	syncInBackground: true,
    }).then(ret => {
      this.setState({
        name: ret.name,
        city: ret.city,
        email: ret.email,
        age: ret.age,
        education: ret.education,
        skills: ret.skills
      })
    }).catch(err => {
    	console.warn(err.message);
    })
  }
  handleSave() {
    storage.save({
    	key: 'personalInformation',
    	data: {
    		name: this.state.name,
    		city: this.state.city,
    		email: this.state.email,
        age: this.state.age,
        education: this.state.education,
        skills: this.state.skills,
    	},
    	expires: null
    });
  }
  render() {
	return (
	  <ScrollView
      style={styles.container}
      bounces={false}
    >
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
      <TouchableHighlight
        style={styles.saveButton}
        onPress={this.handleSave.bind(this)}
        underlayColor='transparent'
      >
        <Text style={styles.saveText}>Save information</Text>
      </TouchableHighlight>
	  </ScrollView>
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
  },
  saveButton: {
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 10,
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00C5DD',
    margin: 10
  },
  saveText: {
    textAlign: 'center',
    fontFamily: Roboto.bold,
    color: '#000000',
    fontSize: 20
  }
});
