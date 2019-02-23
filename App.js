import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'

import MovieList from './src/screens/MovieList'
import HomeScreen from './src/screens/HomeScreen'


const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Movie: {
      screen: MovieList
    },
  },
  {
    initialRouteName: "Home"
  }
)

const AppMenu = createAppContainer(AppNavigator)

export default class App extends Component {
  render() {
    return (
      <AppMenu />
    );
  }
}