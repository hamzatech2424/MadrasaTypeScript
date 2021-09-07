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



const ConfirmPassword: React.FC = () => {
    return (
        <React.Fragment>
            <View style={styles.container}>

                <View style={styles.MainView}>

                    <Header text={'Forgot Password'} />

                    <ContentContainer style={{ width: '90%', height: '100%' }}>

                        <View style={styles.ViewAround}>


                            <View style={{ width: '100%', height: '78%' }}>
                                <Text style={{ fontSize: 18 }}>Confirm Password</Text>

                                <View style={{ marginTop: '6%', width: '100%', height: 85,justifyContent:'space-between' }}>

                                    <AbstractTextInput
                                        // valueChange={email}
                                        // handleChange={(txt)=>setEmail(txt)}
                                        placeHolderTextColor={'grey'}
                                        placeHolderText={'Confirm'}
                                        secureText={true}
                                        height={40}
                                    />


                                    <AbstractTextInput
                                        // valueChange={email}
                                        // handleChange={(txt)=>setEmail(txt)}
                                        placeHolderTextColor={'grey'}
                                        placeHolderText={'Confirm Password'}
                                        secureText={true}
                                        height={40}
                                    />




                                </View>


                                <View style={styles.buttonContainerView}>
                                    <AbstractButton OnPressIn={()=>navigate('ConfirmPassPage')} txtSize={14} text={'Reset'} />
                                </View>

                            </View>




                        </View>


                    </ContentContainer>
                </View>
            </View>
        </React.Fragment>
    )
}



export default ConfirmPassword


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
        justifyContent: 'flex-end',
    },
    buttonContainerView: {
        width: '40%',
        position: 'absolute'
        , bottom: 0
    }
})