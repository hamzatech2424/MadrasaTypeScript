import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { AbstractButton, AbstractTextArea, AbstractTextInput, ContentContainer } from '../Components/Abstract Components'
import { Header } from '../Components/Module Components'



const ADService:React.FC = () => {
    return (
        <View style={styles.container}>
            <Header text={'Add request for Volunteer'} />

            <ContentContainer>


                <View style={{ width:'100%',height:moderateScale(190),justifyContent:'space-between',marginTop:moderateScale(30),marginBottom:moderateScale(10) }}>
              <AbstractTextInput height={moderateScale(40)} placeHolderText={'Service Name'} placeHolderTextColor={'black'} /> 

              <AbstractTextInput height={moderateScale(40)} placeHolderText={'Skill'} placeHolderTextColor={'black'} />  

              <AbstractTextArea height={moderateScale(100)} placeHolderTextColor={'black'} placeHolderText={'Description'} placeHolderTextSizes={moderateScale(11)} />       

                </View>
              
              <AbstractButton height={moderateScale(38)} txtSize={moderateScale(10)} text={'ADD REQUEST'} />


            </ContentContainer>

        </View>
    )
}


export default ADService

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})