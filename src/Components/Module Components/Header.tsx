import React from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {goBack} from '../../Navigation/Navgation'


interface Props {
    text?:string,
    arrowHide?: boolean
}


const Header:React.FC<Props> = ({text,arrowHide}):JSX.Element => {


    const defaultText:string = text ? text : 'TextHere'
    const defaultArrowHide:boolean = arrowHide ? arrowHide : false


    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1.5, y: 0 }} colors={['#3CBA92', '#0AA360', '#0AA360',]}
            style={{
                height: 55,
                width: '100%',
            }}
        >

            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>

                {!defaultArrowHide?
                <TouchableOpacity
                onPress={() => goBack()}
                    activeOpacity={1}
                    style={{ width: '5%', height: '100%', justifyContent: 'center', position: 'absolute', left: 25 }}>
                    <MaterialIcons name={'arrow-back-ios'} size={19} color={'white'} />
                </TouchableOpacity>
                :null}

                <Text style={{ color: 'white', fontSize: 17, textAlign: 'center' }}>{defaultText}</Text>
            </View>
            
        </LinearGradient>
    )
}

export default Header