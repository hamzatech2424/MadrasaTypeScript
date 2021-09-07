import React from "react";
import {View,Text,TouchableOpacity, Image} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {goBack} from '../../Navigation/Navgation'
import {navigate} from '../../Navigation/Navgation'

interface Props {
    text?:string,
    Iconsimple?: boolean,
    OnPressIn?:()=>void

}


const HeaderUsProfile: React.FC<Props> = ({text,Iconsimple,OnPressIn}):JSX.Element=> {

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

                activeOpacity={0.8}
                style={{ width: '5%', height: '100%', justifyContent: 'center', position: 'absolute', left: 25 }}>
                <MaterialIcons name={'arrow-back-ios'} size={19} color={'white'} />
            </TouchableOpacity>
            

            <Text style={{ color: 'white', fontSize: 17, textAlign: 'center' }}>{defaultText}</Text>

          
            <TouchableOpacity
                    activeOpacity={1}
                    onPress={OnPressIn}
                    style={{ width: '10%', height: '100%', justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 25 }}>

                    <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: '#3CBA92', justifyContent: 'center', alignItems: 'center' }}>
                      {Iconsimple ?
                      <View style={{width:'50%',height:'50%',justifyContent:'center',alignItems:'center'}}>

                           <Image source={require('../../Assets/images/IconPerson.png')} style={{width:'90%',height:'90%'}} resizeMode={'contain'} />
                           </View>
                      :
                      <View style={{width:'50%',height:'50%',justifyContent:'center',alignItems:'center',marginLeft:3}}>
                           <Image source={require('../../Assets/images/Icon2.png')} style={{width:'100%',height:'100%'}} resizeMode={'stretch'} />
                           </View>
                      }
                     
                      {Iconsimple?
                       <View style={{width:'30%',height:'30%',justifyContent:'center',alignItems:'center',borderRadius:10,backgroundColor:'red',position:'absolute',right:-1,top:0}}>
                       <MaterialIcons name={'add'} size={9} color={'#0BA360'} />
                       </View>:null}

                    </View>

                </TouchableOpacity>


        </View>
        
    </LinearGradient>

    )
}


export default HeaderUsProfile