import React from "react";
import { View, Text, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


const ImamListModule: React.FC = () => {
    return (
        <View style={{ marginVertical:4,backgroundColor: 'white', width: '100%', height: 105, flexDirection: 'row', borderWidth: 1, borderColor: 'lightgrey' }}>
            <View style={{ width: '25%', height: '100%', justifyContent: 'flex-start' }}>
                <View style={{ width: 50, height: 50, borderRadius: 25, right: 20, position: 'absolute',top:12  }}>
                    <Image source={require('../../Assets/images/images2.jpg')} style={{ width: 50, height: 50, borderRadius: 25 }} />
                </View>
            </View>


            <View style={{ width: '75%', height: '100%', justifyContent: 'center' }}>
                <Text style={{ color: 'black',fontSize: moderateScale(12) }}>Imam Name</Text>
                <Text style={{ color: 'grey',fontSize: moderateScale(9) }}>Age: 12 Year</Text>
                <Text style={{ color: 'grey',fontSize: moderateScale(9) }}>Gender: Male</Text>
                <Text style={{ color: 'grey',fontSize: moderateScale(9) }} numberOfLines={3}>Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae exercitationem accusantium blanditiis quidem expedita molestiae rerum iure eveniet facere illum impedit ea tempore aut, modi animi maiores porro temporibus ipsum!</Text>
            </View>

        
        </View>
    )
}


export default ImamListModule