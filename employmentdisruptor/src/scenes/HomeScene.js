import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  RefreshControl
} from 'react-native';
import { Roboto, Lato } from '../fonts'

export default class HomeScene extends Component {
  static navigationOptions = {
	title: 'Mentors'
  };
	constructor(props) {
		super(props)
		this.state = {
			data: [],
      refreshing: false
		}
	}
	componentWillMount() {
		this.fetchData()
	}
  fetchData() {
    this.setState({refreshing: true})
    const apiUrl = 'https://emplr.herokuapp.com/';
		fetch(apiUrl)
		.then((resp) => resp.json())
		.then((resp) => {
			this.setState({data: resp.data, refreshing: false})
		});
  }
  render() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Latest stuff</Text>
			<ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.fetchData.bind(this)}
          />
        }
      >
				{ this.state.data.map((a, idx) => {
					return (
						<View key={idx} style={styles.databox}>
							<Image style={styles.image} source={{uri: a.image}} />
							<Text style={styles.boxTitle}>{a.title}</Text>
							<Text style={styles.description}>{a.description}</Text>
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
		padding: 10,
    fontFamily: Roboto.bold
	},
	databox: {
		paddingBottom: 20,
		marginBottom: 10,
		borderWidth: 1,
		borderColor: '#000000',
		backgroundColor: '#FFFFFF',
		marginHorizontal: 10,
		borderRadius: 10,
    overflow: 'hidden'
  },
  boxTitle: {
	  fontSize: 20,
	  padding: 10,
    fontFamily: Roboto.bold
  },
  description: {
    fontFamily: Lato.regular,
    paddingHorizontal: 10,
  },
  image: {
	  flex: 1,
	  height: 200,
    resizeMode: 'cover'
  }
});
