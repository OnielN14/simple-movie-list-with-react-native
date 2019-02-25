import React, {Component, Fragment} from 'react'
import {MOVIEDB_ENDPOINT_V3, MOVIEDB_API_KEY} from 'react-native-dotenv'
import {ScrollView, FlatList, View} from 'react-native'

import MovieItem from '../../components/MovieItem.jsx'

export default class MovieList extends Component{
    static navigationOptions = {
        title :'Movie List'
    }

    constructor(props){
        super(props)

        this.state = {
            movieList : []
        }
    }

    // life-cycle
    async componentWillMount(){
        await this.fetchMovieData()
        console.log("this must be 2nd invoked syntax");
        
    }

    // methods
    async fetchMovieData(){
        let url = `${MOVIEDB_ENDPOINT_V3}/movie/popular?api_key=${MOVIEDB_API_KEY}`

        try{
            let response = await fetch(url).then(response => {return response.json()})            
            console.log(response);
            
            this.setState({movieList:response.results})
        }
        catch(error){
            console.error(error)
        }
        
    }

    render(){

        return (
            <FlatList numColumns={3}
                data={this.state.movieList}
                renderItem={({item}) => <MovieItem movieData={item} navigation={this.props.navigation}/>}
                keyExtractor={(item,index) => index.toString()}
                extraData={this.props.navigation}
                columnWrapperStyle={{flexWrap:'nowrap', flex:1, marginTop:5,
                alignItems:'space-between'}}/>
        )
    }
}