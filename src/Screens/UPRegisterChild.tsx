import React from "react";
import { View, Text, Dimensions, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Colors } from "../theme/Color";
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ContentContainer, AbstractTextInput, AbstractButton, AbstractImageUploader, AbstractDropDown } from "../Components/Abstract Components";
import { Header } from "../Components/Module Components";
import { Height } from "../Assets/Height";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


const Dim = Dimensions.get('screen').height

console.log(Dim)

const UPRegisterChild: React.FC = () => {
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

                    <ContentContainer style={{ width: '90%', height: '100%' }}>

                        <KeyboardAvoidingView
                            behavior={'height'}
                        >
                            <ScrollView
                                contentContainerStyle={styles.ScrollViewInnerConatinerView}
                            >

                                <View style={styles.textInputContainerView}>
                                    <AbstractTextInput
                                        // valueChange={email}
                                        // handleChange={(txt)=>setEmail(txt)}
                                        placeHolderTextColor={'black'}
                                        placeHolderText={'Name'}
                                        height={45}
                                    />
                                </View>





                                <View style={styles.textInputContainerView}>
                                    <AbstractTextInput
                                        // valueChange={email}
                                        // handleChange={(txt)=>setEmail(txt)}
                                        placeHolderTextColor={'black'}
                                        placeHolderText={'Age'}
                                        height={45}
                                    />
                                </View>


                                <View style={styles.textInputContainerView}>
                                <AbstractDropDown
                                        placeholder={{ label: 'Gender', value: null, color: 'lightgrey' }}
                                        arrayOptions={[{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }, { label: 'Others', value: 'others' }]}
                                        height={45} IconTop={5}
                                        backColor={'white'}
                                        />

                                </View>


                                <View style={styles.textInputContainerView}>
                                    <AbstractTextInput
                                        // valueChange={email}
                                        // handleChange={(txt)=>setEmail(txt)}
                                        placeHolderTextColor={'black'}
                                        placeHolderText={'Quran Reading Level'}
                                        height={45}
                                    />
                                </View>





                            </ScrollView>
                        </KeyboardAvoidingView>

                    </ContentContainer>

                </View>

                <View style={styles.BottomContainerView}>


                    <ContentContainer style={{ width: '90%', height: '100%' }}>
                        <View style={styles.ButtonContainerView}>

                            <AbstractButton txtSize={moderateScale(13)} text={'SEND REQUEST TO IMAN'} />
                        </View>

                    </ContentContainer>

                </View>


            </View>

        </React.Fragment>
    )
}



export default UPRegisterChild


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    TopContainerView: {
        height: Height(Dim, '32%'),
        width: '100%'
    },
    MiddleContainerView: {
        height: Height(Dim, '30%'),
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
        marginBottom: 10
    },
    ButtonContainerView: {
        width: '100%',
        // height: Height(Dim, '10%'),
        paddingTop: '5%',
        // backgroundColor: 'red',
        // justifyContent: 'flex-start'

    }
})


















//  {/* <ContentContainer bgColor={'grey'} style={{ width: '90%',height:'100%'}}> */}

//  <View style={styles.ImageUploadContainerView}>
//  <AbstractImageUploader />
// </View>









// {/* </ContentContainer> */}