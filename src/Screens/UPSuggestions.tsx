import React from "react";
import {View,Text, StyleSheet} from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Header } from "../Components/Module Components";
import { AbstractButton, AbstractDropDown, AbstractTextArea, AbstractTextInput, ContentContainer } from "../Components/Abstract Components";


const UPSuggestions = () => {

    return (
        <View style={styles.container}>

       
           <View style={styles.mainContainer}>
               <Header text={'Suggestions'} />
               <ContentContainer style={{ width: '90%', height: '100%' }}>
               <View style={styles.ContainerAroundSuggestiontxt}>
          
                <Text style={{fontSize:moderateScale(15)}}>Suggestion</Text>
                <Text style={{color:'grey',fontSize:moderateScale(12)}}>Enter your suggestion we value your input.</Text>
               </View>

         
               <AbstractTextArea placeHolderText={'Write Description'} height={'45%'} placeHolderTextSizes={moderateScale(10)} />
           

              <AbstractButton width={moderateScale(125)} text={'Submit'} txtSize={moderateScale(12)} height={moderateScale(40)} style={{marginTop:moderateScale(18)}} />


               </ContentContainer>

           </View>




        </View>                                        
    )

}


export default UPSuggestions

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    mainContainer:{
        width:'100%',
        height:moderateScale(410)
    },
    ContainerAroundSuggestiontxt:{
        width:'100%',
        height:'28%',
        justifyContent:'center'
    }
})