import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {navigate} from '../../Navigation/Navgation'


interface Props {
    text?: string,
    OnPressIn1?:()=>void,
    OnPressIn2?:()=>void

}


const HeaderVIP: React.FC<Props> = ({ text,OnPressIn1,OnPressIn2 }): JSX.Element => {


    const defaultText: string = text ? text : 'TextHere'


    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1.6, y: 0 }} colors={['#3CBA92', '#0AA360', '#0AA360']}
            style={{
                height: 55,
                width: '100%',
            }}
        >

            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={OnPressIn1}
                    style={{ width: '10%', height: '100%', justifyContent: 'center', alignItems: 'center', position: 'absolute', left: 25 }}>
                    <View style={{ width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../../Assets/images/images2.jpg')} style={{ width: 30, height: 30, borderRadius: 15, }} />
                    </View>
                </TouchableOpacity>

                <Text style={{ color: 'white', fontSize: 17, textAlign: 'center' }}>{defaultText}</Text>

                <TouchableOpacity
                    activeOpacity={1}
                    onPress={OnPressIn2}
                    style={{ width: '10%', height: '100%', justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 25 }}>
                    <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: '#3CBA92', justifyContent: 'center', alignItems: 'center' }}>
                        <FontAwesome name={'bell'} color={'white'} size={15} />
                    </View>
                </TouchableOpacity>

            </View>

        </LinearGradient>
    )
}



export default HeaderVIP