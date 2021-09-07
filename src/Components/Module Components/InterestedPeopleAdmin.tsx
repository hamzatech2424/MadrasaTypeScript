import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Colors } from "../../theme/Color";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const InterestedPeopleAdmin: React.FC = () => {
    return (
        <View style={{marginVertical:4 ,backgroundColor: 'white', width: '100%', height: 150, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'lightgrey' }}>



            <View style={{ width: '95%', height: '85%', justifyContent: 'center',alignItems:'center' }}>
                <View style={{ width: '96%', height: '100%' }}>

                    <View style={{ width: '100%', height: '40%',flexDirection: 'row', justifyContent: 'space-between', marginBottom: '2%' }}>

                        <View style={{ height: '100%', width: '40%', flexDirection: 'column' }}>
                            <Text style={{ color: 'black', fontSize: 11 }}>Person Name</Text>
                            <Text style={{ color: 'grey', fontSize: 10, paddingBottom: 5,width:170 }}>Jan 22,2021    |   +92 307 1234567 </Text>

                            <View
                                style={{ backgroundColor: '#def3ed', height: 14, justifyContent: 'center', alignItems: 'center', width: '60%', borderRadius: 20, flexDirection: 'row' }}>
                                <MaterialCommunityIcons name={'puzzle'} color={'#0AA360'} size={9.5} style={{ paddingRight: 5 }} />
                                <Text style={{ color: '#0AA360', fontSize: 8 }}>PHOTOGRAPHY</Text>
                            </View>

                        </View>
      

                    </View>



                    <Text style={{ color: 'black', fontSize: 10 }}>Details:</Text>
                    <Text numberOfLines={4} style={{ color: 'grey', fontSize: 10 }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur qui, beatae repellendus adipisci officia dolores placeat delectus laudantium id rem, quia voluptates iusto quasi provident dolore voluptatem, corporis veniam ea. </Text>

                </View>

            </View>


        </View>

    )
}



export default InterestedPeopleAdmin









