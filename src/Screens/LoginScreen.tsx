import React,{useState} from "react";
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Colors } from "../theme/Color";
import { Header, PrayerTimings } from "../Components/Module Components";
import { ContentContainer, AbstractTextInput, AbstractButton } from "../Components/Abstract Components";
import {navigate} from '../Navigation/Navgation'



interface DimensionObject {
    fontScale: number,
    height: number,
    scale: number,
    width: number
}

const Dim: DimensionObject = Dimensions.get('screen')


interface JamatObj {
    Fajr: string,
    Duhr: string,
    Asr: string,
    Magrib: string,
    Isha: string
}

const JmmmatTiming: JamatObj = {
    Fajr: '04:00',
    Duhr: '05:00',
    Asr: '04:00',
    Magrib: '04:00',
    Isha: '04:00',
}

const PrayerStratTiming: JamatObj = {
    Fajr: '04:30',
    Duhr: '05:30',
    Asr: '04:30',
    Magrib: '04:30',
    Isha: '04:30',
}


const LoginScreen: React.FC = () => {
     

    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')


    return (
        <View style={styles.container}>

            <View style={styles.TopView}>
                <Header arrowHide text={'Log In'} />
                <ContentContainer style={{ width: '90%', height: '85%', justifyContent: 'center' }}>

                    <View style={styles.textInputsContainerView}>

                        <AbstractTextInput
                        valueChange={email}
                        handleChange={(txt)=>setEmail(txt)}
                        placeHolderTextColor={'black'} 
                        placeHolderText={'Email'}
                        />

                        <AbstractTextInput 
                         valueChange={password}
                         handleChange={(txt)=>setPassword(txt)}
                         placeHolderTextColor={'black'} 
                         placeHolderText={'Password'}
                         secureText={true}
                         />
                    </View>


                    <View style={styles.SignInBtnContainerView} >
                        <AbstractButton text={'Sign In'} />
                    </View>

                    <View style={styles.ForgetTextContainerView} >
 

  
                        <Text
                         style={{fontSize:11,paddingBottom:'1%'}}>ForgetPassword?<Text onPress={()=>navigate('ForgetPage')} style={{ color: Colors.darkgreen }}> Click here</Text></Text>

                        <Text style={{fontSize:11}}>Dont have account?<Text onPress={()=>navigate('RegisterPage')} style={{ color: Colors.darkgreen }}> Create Account</Text></Text>
                    </View>

                </ContentContainer>
            </View>
            


            <View style={styles.BottomView}>
                <ContentContainer style={{ width: '90%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>

                    <PrayerTimings TimingObject={JmmmatTiming} PrayerStartObject={PrayerStratTiming} />

                </ContentContainer>
            </View>

        </View>
    )
}


export default LoginScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28795C',
    },
    TopView: {
        width: '100%',
        height: Dim.height / 2.2,
        backgroundColor: 'white'

    },
    textInputsContainerView: {
        width: '100%',
        height: '35%',
        justifyContent: 'space-between',
        marginTop: '5%',
        // backgroundColor:'red'
    },
    SignInBtnContainerView: {
        width: '100%',
        height: '30%',
        justifyContent: 'center'
    },
    ForgetTextContainerView: {
        width: '100%',
        height: '22%',
        alignItems: 'center'
    },
    BottomView: {
        width: '100%',
        height: '50%'
    }

})