import React from "react";
import { View, Text, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


const ApproveChildModule: React.FC = () => {
    return (
        <View style={{ marginVertical:4,backgroundColor: 'white', width: '100%', height: 80, flexDirection: 'row', borderWidth: 1, borderColor: 'lightgrey' }}>
            <View style={{ width: '25%', height: '100%', justifyContent: 'center' }}>
                <View style={{ width: 50, height: 50, borderRadius: 25, right: 20, position: 'absolute' }}>
                    <Image source={require('../../Assets/images/images2.jpg')} style={{ width: 50, height: 50, borderRadius: 25 }} />
                </View>
            </View>


            <View style={{ width: '45%', height: '100%', justifyContent: 'center' }}>
                <Text style={{ color: 'black',fontSize: moderateScale(12) }}>Child Name</Text>
                <Text style={{ color: 'grey',fontSize: moderateScale(9) }}>Age: 12 Year</Text>
                <Text style={{ color: 'grey',fontSize: moderateScale(9) }}>Gender: Male</Text>
                <Text style={{ color: 'grey',fontSize: moderateScale(9) }}>Quran Reading Level: Good</Text>
            </View>

            <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>

            {/* BlankView */}

            </View>
        </View>
    )
}


export default ApproveChildModule