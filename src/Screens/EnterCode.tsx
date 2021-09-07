import React from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { Colors } from "../theme/Color";
import { ContentContainer, AbstractTextInput, AbstractButton, AbstractImageUploader, AbstractDropDown } from "../Components/Abstract Components";
import { Header } from "../Components/Module Components";
import OTPInputView from '@twotalltotems/react-native-otp-input'

interface DimensionObject {
    fontScale: number,
    height: number,
    scale: number,
    width: number
}

const Dim: DimensionObject = Dimensions.get('screen')



const EnterCode: React.FC = () => {
    return (
        <React.Fragment>
            <View style={styles.container}>

                <View style={styles.MainView}>

                    <Header text={'Forgot Password'} />

                    <ContentContainer style={{ width: '90%', height: '100%' }}>

                        <View style={styles.ViewAround}>


                            <View style={{ width: '100%', height: '75%' }}>
                                <Text style={{ fontSize: 18 }}>Enter Code</Text>

                                <Text style={{ fontSize: 12.5, paddingTop: '2%', color: 'grey' }}>{`We have sent a code on your email, please check it, \n and enter a code below!`}</Text>

                                <View style={{ marginTop: '6%', width: '100%', height: 40}}>
                                <OTPInputView pinCount={6} style={{width: '100%', height: 40}} />
                                </View>


                                <View style={styles.buttonContainerView}>
                                    <AbstractButton text={'Next'} />
                                </View>

                            </View>

                        </View>


                    </ContentContainer>
                </View>
            </View>
        </React.Fragment>
    )
}



export default EnterCode


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