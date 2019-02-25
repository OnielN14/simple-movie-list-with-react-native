import React, { Component, Fragment } from 'react';
import {View, StatusBar} from 'react-native'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import baseColor from './src/style'

import Profile from './src/screens/Profile'
import Favorite from './src/screens/Favorite'
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
    initialRouteName: "Movie",
    defaultNavigationOptions:{
      headerStyle:{
        backgroundColor:baseColor.colorPrimary
      },
      headerTintColor:baseColor.colorTextWhite
    }
  }
)

const AppStack = createAppContainer(AppNavigator)

AppStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true
  if(navigation.state.index > 0){
    tabBarVisible = false
  }

  return {
    tabBarVisible
  }
}

const AppBottomMenu = createBottomTabNavigator(
  {
      Home: AppStack,
      Favorite:Favorite,
      Profile: Profile,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
          const {routeName} = navigation.state
          let IconComponent = MaterialIcons
          let iconName 

          if(routeName === 'Home'){
            iconName = `home`
          }
          else if(routeName === 'Profile'){
            iconName =`person`
          }
          else if(routeName === 'Favorite'){
            iconName = `star`
          }

          return <IconComponent name={iconName} size={25} color={tintColor}/>
        }
    }),
    tabBarOptions:{
      activeTintColor:baseColor.colorPrimary,
      inactiveTintColor: 'gray'
    }
  }
)
const AppBottom = createAppContainer(AppBottomMenu)

export default class App extends Component {
  render() {
    return (
      <Fragment>
          <StatusBar backgroundColor={baseColor.colorPrimary} barStyle='default'/>
        <AppBottom/>
      </Fragment>
    )
  }
}