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

export default class JobScene extends Component {
  static navigationOptions = {
    title: 'Job'
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
  render() {
	return (
	  <ScrollView style={styles.container}>
  		<Text style={styles.title}>Job</Text>
      <TouchableHighlight
        style={styles.saveButton}
        onPress={() => {}}
        underlayColor='transparent'
      >
        <Text style={styles.saveText}>Submit</Text>
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
