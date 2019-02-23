import {StyleSheet} from 'react-native'

export default style = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        flexDirection:'column',
        paddingBottom:8,
        marginBottom:16,
        shadowOpacity: 0.8,
        shadowColor: '#000000',
        shadowRadius:2,
        shadowOffset: {
            height: 1,
            width: 1,
        }
    },
    image:{
        position:'relative',
        flex:1,
        width:'100%',
        height:250,
        resizeMode:'cover'
    },
    textContainer:{
        padding:8
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        borderBottomColor:'rgba(0,0,0,0.1)',
        borderBottomWidth:1,
    }
})