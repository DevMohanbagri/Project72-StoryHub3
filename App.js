import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStory from './screens/WriteStoryScreen';
import ReadStory from './screens/ReadStoryScreen';

export default class App extends React.Component {
  render(){
  return <AppContainer/>
}
}
const TabNavigator= createBottomTabNavigator({
  Read : {screen:ReadStory},
  Write: {screen:WriteStory}
})

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
