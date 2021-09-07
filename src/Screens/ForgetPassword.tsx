import React from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { Colors } from "../theme/Color";
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ContentContainer, AbstractTextInput, AbstractButton, AbstractImageUploader, AbstractDropDown } from "../Components/Abstract Components";
import { Header } from "../Components/Module Components";
import {navigate} from '../Navigation/Navgation'


interface DimensionObject {
    fontScale: number,
    height: number,
    scale: number,
    width: number
}

const Dim: DimensionObject = Dimensions.get('screen')



const ForgetPassword: React.FC = () => {
    return (
        <React.Fragment>
            <View style={styles.container}>

                <View style={styles.MainView}>

                    <Header text={'Forgot Password'} />

                    <ContentContainer style={{ width: '90%', height: '100%' }}>

                        <View style={styles.ViewAround}>


                            <View style={{ width: '100%', height: '75%' }}>
                                <Text style={{ fontSize: 18 }}>Forgot Your Password?</Text>

                                <Text style={{ fontSize: 12.5, paddingTop: '2%', color: 'grey' }}>Forgot your password? entery your email address here to reset your password</Text>

                                <View style={{ marginTop: '6%' }}>
                                    <AbstractTextInput
                                        // valueChange={email}
                                        // handleChange={(txt)=>setEmail(txt)}
                                        placeHolderTextColor={'lightgrey'}
                                        placeHolderText={'Your Email'}
                                        height={40}
                                    />
                                </View>


                                <View style={styles.buttonContainerView}>
                                    <AbstractButton text={'Next'} OnPressIn={()=>navigate('EnterCodePage')} />
                                </View>

                            </View>




                        </View>


                    </ContentContainer>
                </View>
            </View>
        </React.Fragment>
    )
}



export default ForgetPassword


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    MainView: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    ViewAround: {
        width: '100%',
        height: Dim.height / 2.8,
        justifyContent: 'flex-end'
    },
    buttonContainerView: {
        width: '40%',
        position: 'absolute'
        , bottom: 0
    }
})