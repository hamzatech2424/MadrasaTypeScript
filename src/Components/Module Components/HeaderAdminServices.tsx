import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {goBack} from '../../Navigation/Navgation'


interface Props {
    text?: string,
    OnPressIn1?:()=>void,
    OnPressIn2?:()=>void
}



const HeaderAdminServices: React.FC<Props> = ({ text,OnPressIn1,OnPressIn2 }) => {

    const defaultText: string = text ? text : 'TextHere'


    return (

        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1.5, y: 0 }} colors={['#3CBA92', '#0AA360', '#0AA360',]}
            style={{
                height: 55,
                width: '100%',
            }}
        >

            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>

                <TouchableOpacity
                onPress={() => goBack()}

                    activeOpacity={1}
                    style={{ width: '5%', height: '100%', justifyContent: 'center', position: 'absolute', left: 25 }}>
                    <MaterialIcons name={'arrow-back-ios'} size={19} color={'white'} />
                </TouchableOpacity>


                <Text style={{ color: 'white', fontSize: 17, textAlign: 'center' }}>{defaultText}</Text>

                <TouchableOpacity
                activeOpacity={1}
                onPress={OnPressIn1}
                style={{ width: 28, height: 28, borderRadius: 14, backgroundColor: '#3CBA92', justifyContent: 'center', alignItems: 'center',position: 'absolute', right: '15%' }}>
                        <View style={{ width: '50%', height: '60%' }}>

                                <View style={{ width: '100%', height: '100%' }}>
                                    <Image source={require('../../Assets/images/like.png')} style={{ width: '100%', height: '100%' }} />
                                </View>
                   
                        </View>

                </TouchableOpacity>

                <TouchableOpacity 
                 activeOpacity={1}
                 onPress={OnPressIn2}
                style={{ width: 28, height: 28, borderRadius: 14, backgroundColor: '#3CBA92', justifyContent: 'center', alignItems: 'center',position: 'absolute', right: '7%' }}>
                        <View style={{ width: '33%', height: '50%' }}>

                                <View style={{ width: '100%', height: '100%' }}>
                                    <Image source={require('../../Assets/images/volunteer.png')} style={{ width: '100%', height: '100%' }} />
                                </View>
                   
                        </View>

                        <View style={{ width: '30%', height: '30%', justifyContent: 'center', alignItems: 'center', borderRadius: 10, backgroundColor: 'white', position: 'absolute', right: -1, bottom: 0 }}>
                            <MaterialIcons name={'add'} size={9} color={'#0BA360'} />

                        </View>

                </TouchableOpacity>


            </View>


        </LinearGradient>

    )
}



export default HeaderAdminServices