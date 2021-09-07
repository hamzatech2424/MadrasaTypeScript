import React from "react";
import { View, Text, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../theme/Color'

const ApprovePaidMemberAdmin: React.FC = () => {
    return (
        <View style={{ marginVertical:4,backgroundColor: 'white', width: '100%', height: 80, flexDirection: 'row', borderWidth: 1, borderColor: 'lightgrey' }}>
            <View style={{ width: '25%', height: '100%', justifyContent: 'center' }}>
                <View style={{ width: 50, height: 50, borderRadius: 25, right: 20, position: 'absolute' }}>
                    <Image source={require('../../Assets/images/images2.jpg')} style={{ width: 50, height: 50, borderRadius: 25 }} />
                </View>
            </View>


            <View style={{ width: '45%', height: '100%', justifyContent: 'center' }}>
                <Text style={{ color: 'black',fontSize: 13 }}>Donor Name</Text>
                <Text style={{ color: 'grey',fontSize: 10 }}>Age: 12 Year</Text>
                <Text style={{ color: 'grey',fontSize: 10 }}>Gender: Male</Text>
                <Text style={{ color: 'grey',fontSize: 10 }}>Post Code: 46000</Text>
            </View>

            <View style={{ width: '25%', height: '100%', alignItems: 'flex-end',justifyContent:'center',flexDirection:'column' }}>

                 <View style={{backgroundColor:Colors.darkgreen,height:'25%',width:'55%',justifyContent:'center',alignItems:'center'}}>
                     <Text style={{fontSize:8,color:'white'}}>APPROVE</Text>
                 </View> 

                 <View style={{backgroundColor:'#FF3B3B',marginTop:'4%',height:'25%',width:'55%',justifyContent:'center',alignItems:'center'}}>
                     <Text style={{fontSize:8,color:'white'}}>CANCEL</Text>
                 </View> 


            </View>
        </View>
    )
}


export default ApprovePaidMemberAdmin