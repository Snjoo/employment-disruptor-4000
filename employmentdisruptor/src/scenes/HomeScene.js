import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class HomeScene extends Component {
  static navigationOptions = {
	title: 'Mentors'
  };
  data() {
	return {
	  data: [],
	};
  }

	componentDidMount() {
	const apiUrl = 'https://emplr.herokuapp.com/';
	async fetch(apiUrl)
	.then((resp) => resp.json())
	.then((resp) => {

	});
	}
  render() {
	var boxes = [];
	return (
	  <View style={styles.container}>
		<View>/View>
	  </View>
	)
  }
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	paddingTop: 20,
	backgroundColor: '#3EEAFF'
  }
});
