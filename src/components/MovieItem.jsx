import React, {Component} from 'react';
import {Alert, View, Text, Image, TouchableNativeFeedback, ToastAndroid} from 'react-native';

import style from './MovieItemStylesheet'

const Toast = (props) => {
    if(props.visible){
        ToastAndroid.showWithGravityAndOffset(
            props.message,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
        )

        return null
    }

    return null
}

export default class MovieItem extends Component{
    constructor(props){
        super(props)

        this.state = {
            toast : {
                visible : false,
                message : 'no message'
            }
        }

        this._longPressedItem = this._longPressedItem.bind(this)
        this.hideToast = this.hideToast.bind(this)
    }   

    _pressedItem(){
        Alert.alert('One image has been clicked')
    }

    _longPressedItem(){
        console.log('long pressed');
        
        // let toast = {
        //     visible:true,
        //     message : 'Long Pressed'
        // }

        // this.setState(
        //     { toast: toast},
        //     () =>{
        //         this.hideToast()
        //     }
        // )
    }

    hideToast(){
        let toast = {
            visible:false,
            message : 'Toast Closed'
        }

        this.setState({
            toast: toast
        })
    }

    render(){
        return(
            <TouchableNativeFeedback delayLongPress={3000} background={TouchableNativeFeedback.SelectableBackground()} onPress={this._pressedItem} onLongPress={this._longPressedItem}>
                <View  elevation={2} style={style.container} >
                    <Image style={style.image} source={require('../images/dummy-image.png')}/>
                    <View style={style.textContainer}>
                        <Text style={style.title}>{this.props.title}</Text>
                        <Text>{this.props.overview}</Text>
                    </View>
                    <Toast {...this.toast}/>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

