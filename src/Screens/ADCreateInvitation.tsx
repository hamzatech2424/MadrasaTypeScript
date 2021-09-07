import React from "react";
import { View, Text, Dimensions, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Colors } from "../theme/Color";
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ContentContainer, AbstractTextInput, AbstractButton, AbstractImageUploader, AbstractDropDown, AbstractTextArea } from "../Components/Abstract Components";
import { Header } from "../Components/Module Components";
import { Height } from "../Assets/Height";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


const Dim = Dimensions.get('screen').height

console.log(Dim)

const ADCreateInvitation: React.FC = () => {
    return (
        <React.Fragment>
            <View style={styles.container}>


            <Header text={'Create Invitation'} />


                <View style={styles.MiddleContainerView}>

                    <ContentContainer style={{ width: '90%', height: '100%' }}>

                        <KeyboardAvoidingView
                            behavior={'height'}
                        >
                            <ScrollView
                                contentContainerStyle={styles.ScrollViewInnerConatinerView}
                            >

                                <View style={styles.textInputContainerView}>
                                    <Text style={{fontSize:moderateScale(10)}}>Event Name</Text>
                                    <AbstractTextInput
                                        // valueChange={email}
                                        // handleChange={(txt)=>setEmail(txt)}
                                        placeHolderTextColor={'lightgrey'}
                                        placeHolderText={'Enter Event Name'}
                                        height={moderateScale(40)}
                                    />
                                </View>


                                
                                <View style={styles.textInputContainerView}>
                                    <Text style={{fontSize:moderateScale(10)}}>Event Date</Text>
                                    <AbstractTextInput
                                        // valueChange={email}
                                        // handleChange={(txt)=>setEmail(txt)}
                                        placeHolderTextColor={'lightgrey'}
                                        placeHolderText={'DD-MM-YY'}
                                        height={moderateScale(40)}
                                    />
                                </View>

                                <View style={styles.textAreaContainerView}>
                                    <Text style={{fontSize:moderateScale(10)}}>Event Discription</Text>
                                   <AbstractTextArea
                                   placeHolderTextSizes={moderateScale(10)}
                                   placeHolderText={'Enter Event Discription'}
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

                            <AbstractButton txtSize={moderateScale(12)} width={'100%'} height={'52%'} text={'Create Invitation'}  />
                           
                        </View>

                    </ContentContainer>

                </View>


            </View>

        </React.Fragment>
    )
}



export default ADCreateInvitation


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
  
    MiddleContainerView: {
        height: Height(Dim, '51%'),
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
        marginTop:'13%',
        width: '100%',
        // height: Height(Dim, '40%'), 
        // justifyContent: 'space-evenly',
        flexDirection: 'column',
        // backgroundColor: 'red'
    },
    textInputContainerView: {
        marginTop:'2%',
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
        marginTop:'8%',
        flexDirection:'row',
        justifyContent:'space-between',
        // height: Height(Dim, '10%'),
        // paddingTop: '5%',
        // position:'absolute',
        // bottom:0,
        // backgroundColor: 'red',
        // justifyContent: 'flex-start'

    }
})

















