import React, { Component } from 'react';
import {View,Text} from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import MovieList from './src/screens/MovieList'
import MovieDetail from './src/screens/MovieDetail'
import HomeScreen from './src/screens/HomeScreen'


const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Movie: {
      screen: MovieList
    },
    MovieDetail: {
      screen: MovieDetail
    },
  },
  {
    initialRouteName: "Movie"
  }
)

const AppMenu = createAppContainer(AppNavigator)

export default class App extends Component {
  render() {
    return (
      <AppMenu />
      // <View style={{flex:1, justifyContent:'center', alignItem:'center'}}>
      //   <Text>Halo</Text>
      // </View>
    )
  }
}