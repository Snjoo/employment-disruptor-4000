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
  	  skills: '',
      questionAnswer: ''
  	}
  }

  componentWillMount() {
    this.loadPersonalInfo()

    setInterval(() => {
      this.loadPersonalInfo()
    }, 5000);
  }

  loadPersonalInfo() {
    return storage.load({
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

  sendApplication() {
    const job = this.props.navigation.state.params.job
    if ((job.question && this.state.questionAnswer.length < 1) ||
        (this.state.name.length < 1) ||
        (this.state.city.length < 1) ||
        (this.state.email.length < 1) ||
        (this.state.age.length < 1) ||
        (this.state.education.length < 1) ||
        (this.state.skills.length < 1)
    ) {
      this.setState({errorMessage: true})
    } else {
      this.setState({errorMessage: false})
      const apiUrl = 'https://emplr.herokuapp.com/apply/' + job.id;
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.name,
          city: this.state.city,
          email: this.state.email,
          age: this.state.age,
          education: this.state.education,
          skills: this.state.skills,
          questionAnswer: this.state.questionAnswer
        })
      })
    }
  }
  render() {
    const job = this.props.navigation.state.params.job
  	return (
      <View style={styles.container}>
    	  <ScrollView>
          <View style={styles.databox}>
            <Image style={styles.image} source={{uri: job.image}} />
            <Text style={styles.title}>{job.title}</Text>
            <Text style={styles.description}>{job.description}</Text>
            <Text style={styles.description}>Employer: {job.author}</Text>
            <Text style={styles.description}>Location: {job.location}</Text>
            <Text style={styles.description}>Domain: {job.domain}</Text>
            {job.tags && <View style={styles.tagsContainer}>
              {job.tags.map((tag, idx) => <View key={idx} style={styles.tagContainer}><Text style={styles.tag}>{tag}</Text></View>)}
            </View>}
          </View>
          {job.question && <View>
              <Text style={styles.questionInfo}>Please, answer the following question:</Text>
              <TextInput
          		  style={[styles.textInput, styles.multiline]}
          		  placeholder={job.question}
                placeholderTextColor='#000000'
                autoCorrect={false}
          		  value={this.state.questionAnswer}
          		  multiline={true}
                autoCapitalize='none'
          		  onChangeText={(text) => this.setState({questionAnswer: text})}
          		/>
            </View>
          }
          {this.state.errorMessage && job.question ? <Text style={styles.errorMessage}>Please answer the question and fill in your information</Text>
          : this.state.errorMessage ? <Text style={styles.errorMessage}>Please fill in your information</Text> : null}
          <TouchableHighlight
            style={styles.saveButton}
            onPress={this.sendApplication.bind(this)}
            underlayColor='transparent'
          >
            <Text style={styles.saveText}>Apply</Text>
          </TouchableHighlight>
    	  </ScrollView>
      </View>
  	)
  }
}

const styles = StyleSheet.create({
  container: {
  	flex: 1,
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
  },
  questionInfo: {
    fontFamily: Lato.regular,
    paddingHorizontal: 10,
    paddingBottom: 10
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
  errorMessage: {
    color: 'red',
    textAlign: 'center',
    padding: 10
  }
});
