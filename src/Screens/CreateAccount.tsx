import React from "react";
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import { moderateScale } from "react-native-size-matters";
import { AbstractButton, AbstractDropDown, AbstractTextInput, ContentContainer } from "../Components/Abstract Components";
import { Header } from "../Components/Module Components";
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view'


const CreateAccount: React.FC = () => {
    return (
        <View style={styles.container}>

            <Header text={'Create Free Account'} />

            <ContentContainer>

                <View style={{ width: '100%', justifyContent: 'flex-end', alignItems: 'center', height: moderateScale(150), marginBottom: moderateScale(25) }}>
                    <Image source={require('../Assets/images/Logo.png')} style={{ width: '65%', height: '65%' }} resizeMode={'contain'} />
                </View>


                <KeyboardAwareScrollView enableOnAndroid={true} extraHeight={100} >
                    <View
                        style={{ height: moderateScale(175), justifyContent: 'space-between', width: '100%', marginBottom: moderateScale(20) }}
                    >
                        <AbstractTextInput placeHolderText={'First Name'} placeHolderTextColor={'black'} height={moderateScale(40)} />
                        <AbstractTextInput placeHolderText={'Surname'} placeHolderTextColor={'black'} height={moderateScale(40)} />
                        <AbstractTextInput placeHolderText={'Email Address'} placeHolderTextColor={'black'} height={moderateScale(40)} />
                        <AbstractDropDown
                                        placeholder={{ label: 'Gender', value: null, color: 'black' }}
                                        arrayOptions={[{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }, { label: 'Others', value: 'others' }]}
                                        height={moderateScale(40)} IconTop={10}
                                        backColor={'white'}
                                        />

                    </View>



                    <AbstractButton text={'Create an Account'} />
                </KeyboardAwareScrollView>

            </ContentContainer>



        </View>
    )
}


export default CreateAccount


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})