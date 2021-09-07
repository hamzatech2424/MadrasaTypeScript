import React from "react";
import {View,Text,TouchableOpacity, Image} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


interface Props {
    OnPressIn1?:()=>void,
    OnPressIn2?:()=>void,
    OnPressIn3?:()=>void,
}




const HeaderAdmin:React.FC<Props> = ({OnPressIn1,OnPressIn2,OnPressIn3}) => {
    return(
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
                style={{ width: '10%', height: '100%',justifyContent: 'center', alignItems:'center',position: 'absolute', left: '6%' }}>
                <View style={{width:30,height:30,borderRadius:15}}>
                 <Image source={require('../../Assets/images/images2.jpg')} style={{width:30,height:30,borderRadius:15,}} />
                </View>
            </TouchableOpacity>

            <Text style={{ color: 'white',fontSize: 16, textAlign: 'center' }}>Dashboard</Text>

            <TouchableOpacity
                activeOpacity={1}
                onPress={OnPressIn2}
                style={{ width: '10%', height: '100%',justifyContent: 'center', alignItems:'center',position: 'absolute', right: '12%' }}>
                <View style={{width:30,height:30,borderRadius:15,backgroundColor:'#3CBA92',justifyContent:'center',alignItems:'center'}}>
                    <FontAwesome name={'bell'} color={'white'} size={13} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
                 activeOpacity={1}
                 onPress={OnPressIn3}
                style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: '#3CBA92', justifyContent: 'center', alignItems: 'center',position: 'absolute', right: '4%' }}>
                        <View style={{ width: '35%', height: '50%' }}>

                                <View style={{ width: '100%', height: '100%' }}>
                                    <Image source={require('../../Assets/images/muslim.png')} style={{ width: '100%', height: '100%' }} />
                                </View>
                   
                        </View>
                </TouchableOpacity>

        </View>
        
    </LinearGradient>
    )
}



export default HeaderAdmin