import React from "react";
import { View, Text, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';


const DonorInfoModule: React.FC = () => {
    return (
        <View style={{ backgroundColor: 'white',marginBottom:'2%' ,width: '100%', height: 80, flexDirection: 'row', borderWidth: 1, borderColor: 'lightgrey' }}>
            <View style={{ width: '25%', height: '100%', justifyContent: 'center' }}>
                <View style={{ width: 50, height: 50, borderRadius: 25, right: 20, position: 'absolute' }}>
                    <Image source={require('../../Assets/images/images2.jpg')} style={{ width: 50, height: 50, borderRadius: 25 }} />
                </View>
            </View>


            <View style={{ width: '45%', height: '100%', justifyContent: 'center' }}>
                <Text style={{ color: 'black',fontSize: 14 }}>Donor Name</Text>
                <Text style={{ color: 'lightgrey', fontSize: 12 }}>Jan 22, 2021</Text>
                <Text style={{ color: 'grey',fontSize: 13 }}>For New Holy Quran</Text>
            </View>

            <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>

                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1.8, y: 0 }} colors={['#3CBA92', '#0AA360', '#0AA360']}
                    style={{
                        height: '36%',
                        width: '70%',
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>$ 100</Text>
                </LinearGradient>

            </View>
        </View>
    )
}


export default DonorInfoModule