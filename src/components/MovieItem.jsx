import React, {Component} from 'react';
import {Alert, View, Text, Image, TouchableNativeFeedback} from 'react-native';

import {MOVIEDB_W500_ENDPOINT} from 'react-native-dotenv'

import style from './MovieItemStylesheet'


export default class MovieItem extends Component{
    constructor(props){
        super(props)

        this._pressedItem = this._pressedItem.bind(this)
        this._longPressedItem = this._longPressedItem.bind(this)
    }   

    _pressedItem(){
        this.props.navigation.navigate('MovieDetail',{
            titleScreen:this.props.movieData.title,
            movieData:this.props.movieData
            }
        )
        
    }

    _longPressedItem(){
        Alert.alert('One image has been long clicked')
    }

    render(){
        return(
            <TouchableNativeFeedback delayLongPress={2000} onPress={this._pressedItem} onLongPress={this._longPressedItem}>
                <View  elevation={3} style={[style.container]} >
                    <Image style={style.image} source={{uri:`${MOVIEDB_W500_ENDPOINT}${this.props.movieData.poster_path}`}}/>
                    <Text style={style.title}>{this.props.movieData.title}</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

