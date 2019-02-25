import {StyleSheet} from 'react-native'

export default style = StyleSheet.create({
    container:{
        flex:1
    },
    headerContainer:{
        flex:1/4,
    },
    headerImage:{
        flex:1
    },
    headerTitle:{
        color:'white',
        fontWeight:'bold',
        fontSize:24,
        position:'absolute',
        right:5,
        left:5,
        bottom:5,
        textShadowColor: '#000000',
        textShadowRadius:2,
        textShadowOffset:{
            height:1,
            width:1,
        }
    },
    textContainer:{
        padding:8
    },
    textOverview:{
        fontSize:18
    }
})