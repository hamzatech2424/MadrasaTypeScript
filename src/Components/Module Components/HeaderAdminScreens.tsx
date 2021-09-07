import React from "react";
import {View,Text,TouchableOpacity, Image} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {goBack} from '../../Navigation/Navgation'


interface Props {
    text?:string,
    Announce?:boolean,
    invitation?:boolean,
    OnPressIn?:()=>void

}


const HeaderAdminScreens: React.FC<Props> = ({text,Announce,invitation,OnPressIn}):JSX.Element=> {

    const defaultText:string = text ? text : 'TextHere'

    return(
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
            onPress={OnPressIn}
                    activeOpacity={1}
                    style={{ width: '10%', height: '100%', justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 25 }}>

                    <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: '#3CBA92', justifyContent: 'center', alignItems: 'center' }}>
                        {Announce ?
                       <View style={{width:'50%',height:'50%'}}>
                           <Image source={require('../../Assets/images/promotion.png')} style={{width:'100%',height:'100%'}} resizeMode={'center'} />
                       </View>
                       : invitation ?
                       <View style={{width:'50%',height:'50%'}}>
                       <Image source={require('../../Assets/images/invitation.png')} style={{width:'100%',height:'100%'}} resizeMode={'center'} />
                      </View> :
                       <View style={{width:'50%',height:'50%'}}>
                           <Image source={require('../../Assets/images/users.png')} style={{width:'100%',height:'100%'}} resizeMode={'center'} />
                       </View>
                       }
                       <View style={{width:'30%',height:'30%',justifyContent:'center',alignItems:'center',borderRadius:10,backgroundColor:'white',position:'absolute',right:-1,bottom:0}}>
                       <MaterialIcons name={'add'} size={9} color={'#0BA360'} />
                       </View>

                    </View>

                </TouchableOpacity>


        </View>
        
    </LinearGradient>

    )
}


export default HeaderAdminScreens