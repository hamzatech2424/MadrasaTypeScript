import React, { useState, } from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';



interface Props {
    TimingObject: {
        Fajr: string,
        Duhr: string,
        Asr: string,
        Magrib: string,
        Isha: string
    },
   
}



const LoginPrayerTimingModule: React.FC<Props> = ({ TimingObject}) => {



    return (
        <View style={{ width: '100%', height: 110, backgroundColor: 'white', alignSelf: 'center', flexDirection: 'column', borderRadius: 3 }}>


            <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1.8, y: 0 }} colors={['#3CBA92', '#0AA360', '#0AA360']}
                    style={{ width: '100%', height: '100%',justifyContent: 'center', alignItems: 'center',borderTopRightRadius:3,borderTopLeftRadius:3 }}>

                    <Text style={{ textAlign: 'center', fontSize: 16, color: 'white' }}>Friday January 22, 2021</Text>

                </LinearGradient>




            </View>

            


            <View style={{width: '100%', height: '50%', flexDirection: 'row', borderTopColor: 'lightgrey', borderBottomWidth: 0.5 }}>
                <View style={{ width: '18%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRightColor: 'lightgrey', borderLeftWidth: 0.5,borderRightWidth: 0.5,borderLeftColor:'grey' }}>
                    <Text style={{ fontSize: 11 }} >Prayers</Text>
                    <Text style={{ fontSize: 11, color: 'grey' }} >Timing</Text>
                </View>

                <View style={{ width: '16.5%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRightColor: 'lightgrey', borderLeftWidth: 0.5 }}>
                    <Text style={{ fontSize: 11 }} >Fajr</Text>
                    <Text style={{ fontSize: 11, color: 'grey' }} >
                        {
                            TimingObject.Fajr
                         
                        }
                    </Text>
                </View>


                <View style={{ width: '16.5%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRightColor: 'lightgrey', borderLeftWidth: 0.5 }}>
                    <Text style={{ fontSize: 11 }} >Duhr</Text>
                    <Text style={{ fontSize: 11, color: 'grey' }} >
                        {
                            TimingObject.Duhr
                        }
                    </Text>
                </View>


                <View style={{ width: '16.5%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRightColor: 'lightgrey', borderLeftWidth: 0.5 }}>
                    <Text style={{ fontSize: 11 }} >Asr</Text>
                    <Text style={{ fontSize: 11, color: 'grey' }} >
                        {
                            TimingObject.Asr
                        }
                    </Text>
                </View>


                <View style={{ width: '16.5%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRightColor: 'lightgrey', borderLeftWidth: 0.5 }}>
                    <Text style={{ fontSize: 11 }} >Magrib</Text>
                    <Text style={{ fontSize: 11, color: 'grey' }} >
                        {
                            TimingObject.Magrib
                        
                        }
                    </Text>
                </View>

                <View style={{ width: '16.5%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRightColor: 'grey', borderLeftWidth: 0.5,borderRightWidth:0.5 }}>
                    <Text style={{ fontSize: 11 }} >Isha</Text>
                    <Text style={{ fontSize: 11, color: 'grey' }} >
                        {
                            TimingObject.Isha
                        }
                    </Text>
                </View>



            </View>



        </View>
    )
}

export default LoginPrayerTimingModule















// interface JamatObj  {
//     Fajr:string,
//     Duhr:string,
//     Asr:string,
//     Magrib:string,
//     Isha:string
// }

//  const JmmmatTiming:JamatObj = {
//      Fajr:'04:00',
//      Duhr:'05:00',
//      Asr:'04:00',
//      Magrib:'04:00',
//      Isha:'04:00',
//  }





{/* <PrayerTimings TimingObject={JmmmatTiming} PrayerStartObject={PrayerStratTiming}  /> */}