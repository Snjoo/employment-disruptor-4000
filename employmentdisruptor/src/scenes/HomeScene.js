import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  RefreshControl,
  TouchableHighlight
} from 'react-native';
import { NavigationActions } from 'react-navigation'
import { Roboto, Lato } from '../fonts'

export default class HomeScene extends Component {
  static navigationOptions = {
	   title: 'Mentors',
	 header: null
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
  fetchData() {
	this.setState({refreshing: true})
	const apiUrl = 'https://emplr.herokuapp.com/';
		fetch(apiUrl)
		.then((resp) => resp.json())
		.then((resp) => this.sortResponseData(resp))
		.then((data) => {
			this.setState({data: data, refreshing: false})
		})
  }
  sortResponseData(resp) {
	  let data = resp.data.map((data) => this.scoreData(data))
	  data.sort((a, b) => {
		  return a.score - b.score;
	  });

	  return data;
  }
  scoreData(data) {
	let skills = this.state.skills.split(/(\b)+/);
	console.log(skills);
	data.score = skills.reduce((score, skill) => {
		console.log(skill, score);
		return score + data.tags.reduce((score, tag) => {
			return score + (this.fuzzyMatchStrings(skill, tag) ? 1 : 0);
		}, 0)
	}, 0)
	console.log(this.state.skills, data.tags, data.score);
	return data;
  }
  fuzzyMatchStrings(key, str) {
	  var strlen = str.length;
	  var keylen = key.length;
	  if (keylen > strlen) {
		  return false;
	  }
	  if (keylen === strlen) {
		  return key === str;
	  }
	  for (let i = 0, j = 0; i < keylen; i++) {
		  var nch = key.charCodeAt(i);
		  while (j < strlen) {
			  if (str.charCodeAt(j++) === nch) {
				  break;
			  }
		  }
		  return false;
	  }
	  return true;
  }
  openJob(job) {
	this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'Job', params: { job: job } }))
  }
  render() {
	return (
		<View style={styles.container}>
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
						<TouchableHighlight underlayColor='transparent' key={idx} style={styles.databox} onPress={() => this.openJob(a)}>
			  <View>
  							<Image style={styles.image} source={{uri: a.image}} />
  							<Text style={styles.boxTitle}>{a.title}</Text>
  							<Text style={styles.description}>{a.description}</Text>
			  </View>
						</TouchableHighlight>
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
		paddingTop: 25,
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
