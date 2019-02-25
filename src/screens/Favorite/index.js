import React, {Component} from 'react'
import {View, Text, StatusBar} from 'react-native'

import baseColor from '../../style'

export default class Favorite extends Component{

    render(){
        return (
            <View style={{flex:1, alignItems:"center", justifyContent:'center'}}>
                <Text>Favorite Screen</Text>
            </View>
        )
    }
}