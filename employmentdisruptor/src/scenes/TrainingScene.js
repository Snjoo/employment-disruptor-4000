import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ScrollView,
  Linking
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
    const apiUrl = 'https://emplr.herokuapp.com/training/' + skill;
    fetch(apiUrl)
    .then(res => res.json())
    .then(res => this.setState({trainings: res}))
  }
  openTrainingHomepage(url) {
    if (url) {
      Linking.openURL(url)
    }
  }
  render() {
    console.log(this.state.trainings)
    const skill = this.props.navigation.state.params.skill
  	return (
  	  <ScrollView
        style={styles.container}
      >
      {this.state.trainings.length === 0 ?
        <Text style={styles.text}>Unfortunately no {skill} trainings found</Text>
      : this.state.trainings.map((training, idx) =>
        <TouchableHighlight
          style={styles.databox}
          key={idx}
          onPress={() => this.openTrainingHomepage(training.homepage)}
          underlayColor='transparent'
        >
          <View>
            <Text style={styles.title}>{training.title}</Text>
            <Text style={styles.subtitle}>{training.subtitle}</Text>
            <Text style={styles.description}>{training.syllabus}</Text>
          </View>
        </TouchableHighlight>
      )}
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
  },
  databox: {
    marginTop: 10,
		paddingBottom: 20,
		marginBottom: 10,
		borderWidth: 1,
		borderColor: '#000000',
		backgroundColor: '#FFFFFF',
		marginHorizontal: 10,
		borderRadius: 10,
	  overflow: 'hidden'
  },
  title: {
    fontSize: 20,
  	padding: 10,
  	fontFamily: Roboto.bold
  },
  subtitle: {
    fontSize: 16,
    paddingTop: 0,
  	padding: 10,
  	fontFamily: Roboto.bold
  },
  description: {
	  fontFamily: Lato.regular,
	  paddingHorizontal: 10,
    marginBottom: 10
  },
});
