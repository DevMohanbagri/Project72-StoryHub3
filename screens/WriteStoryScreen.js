import React from 'react';
import { StyleSheet, Text, View ,Image, TextInput, TouchableOpacity,
  KeyboardAvoidingView, ToastAndroid} from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import db from '../config';
import firebase from 'firebase';
import { Platform } from 'react-native';

export default class WriteStory extends React.Component{
  constructor(){
    super()
    this.state={
      author: '',
      title: '',
      story: ''
    }
  }


  submitStory=async()=>{ 
     db.collection("stories").add({
     title: this.state.title,
      author: this.state.author,
      story: this.state.story,
      }) }
    render(){
        return(
            <SafeAreaProvider>
                <Header
                centerComponent = {{text:'StoryHub', style:{color:'blue', fontSize: 24}}}
                backgroundColor = 'lightblue'
                />

                <Text style={styles.displayText}>Title of the story</Text>
                <TextInput style={styles.inputBox} onChangeText={(text)=>{
                  this.setState({
                    title: text
                  })
                }} />

                <Text style={styles.displayText}>Author Name</Text>
                <TextInput style={styles.inputBox} onChangeText={(text)=>{
                  this.setState({
                    author: text
                  })
                }}  />

                <Text style={styles.displayText}>WriteStory</Text>
                <TextInput style={styles.storyinputBox}  multiline= {true} onChangeText={(text)=>{
                  this.setState({
                    story: text
                  })
                }}/>


                <TouchableOpacity style = {styles.submitButton} 
                onPress={()=>{
                  this.submitStory()
                  alert("Your story has been submitted");
                }}>
                <Text style={styles.buttonText}> Submit </Text>
                </TouchableOpacity>
                <KeyboardAvoidingView
                  behavior={Platform.OS==="web" ?"padding" : "height"}
                  style = {styles.container}
                />
            </SafeAreaProvider>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    submitButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 20,
      width : 100,
      alignSelf: 'center'
    },
    buttonText:{
      fontSize: 20,
    },
    displayText:{
        marginLeft: 400,
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    inputView:{
        flexDirection: 'row',
        margin: 20
    },
    inputBox:{
        width: 200, 
        height:40, 
        borderWidth: 1.5, 
        fontSize: 20,
        alignSelf: 'center',
        marginBottom: 20
      },
      storyinputBox:{
        width: 500, 
        height:200, 
        borderWidth: 1.5, 
        fontSize: 20,
        alignSelf: 'center'
      }
    });