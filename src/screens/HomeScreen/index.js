import React, { Component } from 'react';
import { View, Button } from 'react-native'

export default class HomeScreen extends Component {
    static navigationOptions = {
        title :'Home'
    }

    constructor(props){
        super(props)

        this.goToMovieList = this.goToMovieList.bind(this)
    }

    componentDidMount(){
                
    }

    goToMovieList(){
        this.props.navigation.navigate('Movie')
    }

    render() {
        return <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Button title="Go To Movie List" onPress={this.goToMovieList}/>
        </View>
    }
}