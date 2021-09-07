import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../theme/Color';





const MemberListAdminModule: React.FC = () => {
    return (
        <View style={{marginVertical:4 ,backgroundColor: 'white', width: '100%', height: 130, flexDirection: 'row', borderWidth: 1, borderColor: 'lightgrey' }}>
            <View style={{ width: '20%', height: '100%', justifyContent: 'flex-start' }}>
                <View style={{ width: 35, height: 35, borderRadius: 17.5, right: 20, position: 'absolute', top: 10 }}>
                    <Image source={require('../../Assets/images/images2.jpg')} style={{ width: 35, height: 35, borderRadius: 17.5 }} />
                </View>
            </View>


            <View style={{ width: '80%', height: '100%', justifyContent: 'center' }}>
                <View style={{ width: '85%', height: '80%' }}>

                    <View style={{ width: '100%', height: '30%', marginBottom: '2%', flexDirection: 'row', justifyContent: 'space-between' }}>

                        <View style={{ height: '100%', width: '40%', flexDirection: 'column' }}>
                            <Text style={{ color: 'black', fontSize: 12 }}>Member Name</Text>
                            <Text style={{ color: 'grey', fontSize: 10, paddingBottom: 5 }}>Jan 22,2021</Text>
                        </View>


                        <View style={{ height: '80%', width: '18%', position: 'absolute', right: '-10%', justifyContent: 'space-between', flexDirection: 'row' }}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={{ backgroundColor: '#FF3B3B', height: 20, width: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>

                                <Ionicons
                                    name={'person-remove'}
                                    color={'lightgrey'}
                                    size={10}
                                />

                            </TouchableOpacity>


                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={{ backgroundColor: Colors.darkgreen, height: 20, width: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>

                                <Ionicons
                                    name={'ios-person-add'}
                                    color={'lightgrey'}
                                    size={10}
                                />
                            </TouchableOpacity>
                        </View>

                    </View>



                    <Text style={{ color: 'black', fontSize: 10 }}>Details:</Text>
                    <Text numberOfLines={4} style={{ color: 'grey', fontSize: 10 }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur qui, beatae repellendus adipisci officia dolores placeat delectus laudantium id rem, quia voluptates iusto quasi provident dolore voluptatem, corporis veniam ea. </Text>

                </View>

            </View>


        </View>
    )
}



export default MemberListAdminModule