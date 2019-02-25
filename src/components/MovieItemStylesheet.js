import {StyleSheet} from 'react-native'

export default style = StyleSheet.create({
    container:{
        backgroundColor:'pink',
        flex:1/3,
        padding:0,
        height:200,
        margin:5,
        position:'relative',
        shadowOpacity: 0.8,
        shadowColor: '#000000',
        shadowRadius:2,
        shadowOffset: {
            height: 1,
            width: 1,
        },
    },
    image:{
        position:'relative',
        resizeMode:'cover',
        flex:1
    },
    title:{
        fontSize:16,
        color:'white',
        fontWeight:'bold',
        position:'absolute',
        bottom:5,
        left:5,
        right:5.
    }
})