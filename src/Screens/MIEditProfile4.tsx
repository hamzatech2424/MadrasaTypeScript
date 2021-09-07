import React from "react";
import { View, Text, Dimensions, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Colors } from "../theme/Color";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ContentContainer, AbstractTextInput, AbstractButton, AbstractImageUploaderWithBtn, AbstractDropDown, AbstractTextArea } from "../Components/Abstract Components";
import { Header } from "../Components/Module Components";
import { Height } from "../Assets/Height";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


const Dim = Dimensions.get('screen').height

console.log(Dim)

const MIEditProfile4: React.FC = () => {
    return (
        <React.Fragment>
            <View style={styles.container}>

            <Header text={'Edit Profile'} />
                <View style={styles.TopContainerView}>
                   
                    <View style={styles.ImageUploadContainerView}>
                        <AbstractImageUploaderWithBtn />
                    </View>
                </View>

                <View style={styles.MiddleContainerView}>

                    <ContentContainer style={{ width: '90%', height: '100%' }}>

                        <KeyboardAvoidingView
                            behavior={'height'}
                        >
                            <ScrollView
                                contentContainerStyle={styles.ScrollViewInnerConatinerView}
                            >

                                <View style={styles.textInputContainerView}>
                                    <Text style={{fontSize:moderateScale(10)}}>First Name</Text>
                                    <AbstractTextInput
                                        // valueChange={email}
                                        // handleChange={(txt)=>setEmail(txt)}
                                        placeHolderTextColor={'lightgrey'}
                                        placeHolderText={'Enter First Name'}
                                        height={moderateScale(40)}
                                    />
                                </View>

                                <View style={styles.textAreaContainerView}>
                                    <Text style={{fontSize:moderateScale(10)}}>Bio</Text>
                                   <AbstractTextArea
                                   placeHolderTextSizes={moderateScale(10)}
                                   placeHolderText={'Enter Bio'}
                                   height={moderateScale(130)}
                                   />
                                </View>



                            </ScrollView>
                        </KeyboardAvoidingView>

                    </ContentContainer>

                </View>

                <View style={styles.BottomContainerView}>


                    <ContentContainer style={{ width: '90%', height: '100%' }}>
                        <View style={styles.ButtonContainerView}>

                            <AbstractButton txtSize={moderateScale(13)} text={'Save'} />
                        </View>

                    </ContentContainer>

                </View>


            </View>

        </React.Fragment>
    )
}



export default MIEditProfile4


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    TopContainerView: {
        height: Height(Dim, '25%'),
        width: '100%',
        paddingTop:20
    },
    MiddleContainerView: {
        marginTop:'10%',
        height: Height(Dim, '35%'),
        width: '100%',
        // backgroundColor: 'blue'
    },
    BottomContainerView: {
        height: Height(Dim, '24%'),
        width: '100%',
        // backgroundColor: 'red'
    },
    ImageUploadContainerView: {
        width: '100%',
        height: Height(Dim, '25%'),
        // height:'30%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'lightgrey'
    },
    ScrollViewInnerConatinerView: {
        width: '100%',
        // height: Height(Dim, '40%'),
        // justifyContent: 'space-evenly',
        flexDirection: 'column',
        // backgroundColor: 'red'
    },
    textInputContainerView: {
        width:'100%',
        height:moderateScale(60),
        // backgroundColor:'red',
        justifyContent:'space-between'
    },
    textAreaContainerView: {
        width:'100%',
        height:moderateScale(150),
        // backgroundColor:'red',
        marginTop:moderateScale(10),
        justifyContent:'space-between'
    },
    ButtonContainerView: {
        width: '100%',
        // height: Height(Dim, '10%'),
        // paddingTop: '5%',
        position:'absolute',
        bottom:40,
        // backgroundColor: 'red',
        // justifyContent: 'flex-start'

    }
})

















