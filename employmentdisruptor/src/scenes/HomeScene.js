import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

export default class HomeScene extends Component {
  static navigationOptions = {
	title: 'Mentors'
  };
	constructor(props) {
		super(props)
		this.state = {
			data: [],
		}
	}
	componentWillMount() {
		const apiUrl = 'https://emplr.herokuapp.com/';
		fetch(apiUrl)
		.then((resp) => resp.json())
		.then((resp) => {
			this.setState({data: resp.data})
		});
	}
  render() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Latest stuff</Text>
			<ScrollView>
				{ this.state.data.map((a, idx) => {
					return (
						<View key={idx} style={styles.databox}>
							<Image style={styles.image} source={{uri: a.image}} />
							<Text style={styles.boxTitle}>{a.title}</Text>
							<Text>{a.description}</Text>
						</View>
					)
				}
			)}
			</ScrollView>
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
		padding: 10
	},
	databox: {
		paddingBottom: 20,
		paddingTop: 20,
		marginBottom: 10,
		borderWidth: 1,
		borderColor: '#000000',
		backgroundColor: '#FFFFFF',
		marginHorizontal: 10,
		padding: 10,
		borderRadius: 10,
  },
  boxTitle: {
	  fontSize: 20,
	  padding: 10,
  },
  image: {
	  width: "100%",
	  height: 200,
  }
});
