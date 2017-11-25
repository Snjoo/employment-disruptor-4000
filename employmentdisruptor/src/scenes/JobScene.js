import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ScrollView,
  Image
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
    const job = this.props.navigation.state.params.job
    console.log(job)
  	return (
  	  <ScrollView style={styles.container}>
        <View style={styles.databox}>
          <Image style={styles.image} source={{uri: job.image}} />
          <Text style={styles.title}>{job.title}</Text>
          <Text style={styles.description}>{job.description}</Text>
          <Text style={styles.description}>Location: {job.location}</Text>
          <Text style={styles.description}>Domain: {job.domain}</Text>
          {job.tags && <View style={styles.tagsContainer}>
            {job.tags.map((tag, idx) => <View key={idx} style={styles.tagContainer}><Text style={styles.tag}>{tag}</Text></View>)}
          </View>}
        </View>
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
    fontSize: 20,
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
  },
  description: {
	  fontFamily: Lato.regular,
	  paddingHorizontal: 10,
    marginBottom: 10
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
  image: {
	  flex: 1,
	  height: 200,
	  resizeMode: 'cover'
  },
  tagsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  tagContainer: {
    marginTop: 10,
    height: 25,
    borderRadius: 13,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginLeft: 10,
  },
  tag: {
    color: '#000000'
  }
});
