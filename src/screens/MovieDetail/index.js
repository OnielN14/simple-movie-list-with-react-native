import React, {Component} from 'react'
import {View,Image,Text} from 'react-native'

import {MOVIEDB_W500_ENDPOINT} from 'react-native-dotenv'

import style from './style'

export default class MovieDetail extends Component{
    constructor(props){
        super(props)

        this.state = {
            movieData:{}
        }
    }

    static navigationOptions = ({navigation}) => {
        return {
            title : navigation.getParam('titleScreen','Movie Detail')
        }
    }


    componentDidMount(){
        let {navigation} = this.props
        
        let data = navigation.getParam('movieData')
        
        this.setState({
            movieData : data
        })
        
        
    }

    render(){
        return (
            <View style={style.container}>
                <View style={style.headerContainer}>
                    <Image style={style.headerImage} source={{uri:`${MOVIEDB_W500_ENDPOINT}${this.state.movieData.backdrop_path}`}}/>
                    <Text style={style.headerTitle}>{this.state.movieData.title}</Text>
                </View>
                <View style={style.textContainer}>
                    <Text style={style.textOverview}>{this.state.movieData.overview}</Text>
                </View>
            </View>
        )
    }
}