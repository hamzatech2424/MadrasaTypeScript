import React from "react";
import {View,Text, StyleSheet} from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Header } from "../Components/Module Components";
import { AbstractButton, AbstractDropDown, AbstractTextArea, AbstractTextInput, ContentContainer } from "../Components/Abstract Components";


const ADCreateAnnouncement = () => {

    return (
        <View style={styles.container}>

       
           <View style={styles.mainContainer}>
               <Header text={'Create Announcement'} />
               <ContentContainer style={{ width: '90%', height: '100%' }}>
               <View style={styles.ContainerAroundSuggestiontxt}>
          
                <Text style={{fontSize:moderateScale(15)}}>Subject</Text>
                <Text style={{color:'grey',fontSize:moderateScale(12)}}>Enter your Subject. We value your input.</Text>
               </View>

         
               <AbstractTextArea placeHolderText={'Announcement'} height={'45%'} placeHolderTextSizes={moderateScale(10)} />
           

              <AbstractButton width={moderateScale(125)} text={'Submit'} txtSize={moderateScale(12)} height={moderateScale(40)} style={{marginTop:moderateScale(18)}} />


               </ContentContainer>

           </View>




        </View>                                        
    )

}


export default ADCreateAnnouncement

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