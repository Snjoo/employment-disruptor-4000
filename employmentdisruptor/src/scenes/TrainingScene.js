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

export default class TrainingScene extends Component {
  static navigationOptions = {
    title: 'Trainings'
  };
  constructor(props) {
  	super(props)
  	this.state = {
      trainings: []
  	}
  }
  componentWillMount() {
    const skill = this.props.navigation.state.params.skill
    console.log(skill)
  }
  render() {
    const skill = this.props.navigation.state.params.skill
  	return (
  	  <ScrollView
        style={styles.container}
      >
      {this.state.trainings.length === 0 ?
        <Text style={styles.text}>Unfortunately no {skill} trainings found</Text>
      : <Text>Juuh</Text>}
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
  text: {
    fontFamily: Lato.regular,
    padding: 10,
    paddingTop: 0
  }
});
