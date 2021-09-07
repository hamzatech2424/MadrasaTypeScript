import React from "react";
import {View,Text,StyleSheet, Image} from 'react-native'



const SplashScreen:React.FC = () => {
    return(
        <View style={styles.container}>
           <View style={styles.middle}>

               <Image resizeMode={'cover'} source={require('../Assets/images/drawable-hdpi/logo.png')} style={{width:'100%',height:'100%'}}  />

           </View>
        </View>
    )
}


export default SplashScreen


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    middle:{
        width:'40%',
        height:'40%',

    }
})