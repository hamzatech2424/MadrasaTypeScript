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

const ADAddImamByAdmin: React.FC = () => {
    return (
        <React.Fragment>
            <View style={styles.container}>


                <View style={styles.TopContainerView}>
                    <Header text={'Register Child '} />
                    <View style={styles.ImageUploadContainerView}>
                        <AbstractImageUploader />
                    </View>
                </View>

                <View style={styles.MiddleContainerView}>

                    <ContentContainer>

                        <ScrollView
                        >

                            <KeyboardAvoidingView
                                style={{ height: Height(Dim, '42%'), justifyContent: 'space-between' }}
                                behavior={'height'}
                            >



                                <AbstractTextInput
                                    // valueChange={email}
                                    // handleChange={(txt)=>setEmail(txt)}
                                    placeHolderTextColor={'black'}
                                    placeHolderText={'Enter First Name'}
                                    height={moderateScale(40)}
                                />


                                <AbstractTextArea
                                    placeHolderTextSizes={moderateScale(10)}
                                    placeHolderText={'Enter Description'}
                                    placeHolderTextColor={'black'}
                                    height={moderateScale(130)}
                                />

                                <AbstractTextInput
                                    // valueChange={email}
                                    // handleChange={(txt)=>setEmail(txt)}
                                    placeHolderTextColor={'black'}
                                    placeHolderText={'Age'}
                                    height={moderateScale(40)}
                                />

                                <AbstractDropDown
                                    placeholder={{ label: 'Gender', value: null, color: 'lightgrey' }}
                                    arrayOptions={[{ label: 'Male', value: 'male' }]}
                                    height={moderateScale(40)} IconTop={10}
                                    backColor={'white'}
                                />





                            </KeyboardAvoidingView>
                        </ScrollView>

                    </ContentContainer>

                </View>

                <View style={styles.BottomContainerView}>


                    <ContentContainer>
                        <View style={styles.ButtonContainerView}>

                            <AbstractButton txtSize={moderateScale(13)} text={'ADD IMAM'} />
                        </View>

                    </ContentContainer>

                </View>


            </View>

        </React.Fragment>
    )
}



export default ADAddImamByAdmin


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    TopContainerView: {
        height: Height(Dim, '32%'),
        width: '100%'
    },
    MiddleContainerView: {
        height: Height(Dim, '42%'),
        width: '100%',
        // backgroundColor: 'blue',
        // justifyContent: 'space-between'

    },
    BottomContainerView: {
        height: Height(Dim, '20%'),
        width: '100%',
        // backgroundColor: 'red',
        // position: 'absolute',
        // bottom: 10
    },
    ImageUploadContainerView: {
        width: '100%',
        height: Height(Dim, '25%'),
        // height:'30%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'lightgrey'
    },


    ButtonContainerView: {
        width: '100%',
        // height: Height(Dim, '10%'),
        paddingTop: '5%',
        position: 'absolute',
        bottom: 0,
        // backgroundColor: 'red',
        // justifyContent: 'flex-start'

    }
})

















