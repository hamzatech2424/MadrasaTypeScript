import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Colors } from "../../theme/Color";

const FriendRequestModule = () => {



    return (
        <View style={{ marginVertical:8,backgroundColor: 'white', width: '100%', height: 120, justifyContent: 'center', alignItems: 'center', borderColor: 'lightgrey', borderWidth: 1 }}>

            <View style={{ width: '90%', height: '80%', flexDirection: 'row' }}>
                <View style={{ width: '25%', height: '100%', alignItems: 'center' }}>

                    <View style={{ height: '60%', width: '60%' }}>
                        <Image source={require('../../Assets/images/images2.jpg')} style={{ width: '100%', height: '100%' }} />
                    </View>
                </View>




                <View style={{ width: '75%', height: '100%'}}>
                    <View style={{ width: '100%', height: '50%' }}>
                        <Text style={{ fontSize: 12, paddingBottom: '2%' }}>Name of the parent</Text>

                        <View style={{ width: '100%', height: '55%', flexDirection: 'row' }}>

                            <View style={{ width: '15%', height: '100%', flexDirection: 'row' }}>
                                <FontAwesome
                                    name={'child'}
                                    color={Colors.darkgreen}
                                    size={17}
                                />
                                <Text style={{ fontSize: 11, paddingLeft: '15%', textAlignVertical: 'center' }}>2</Text>
                            </View>

                            <View style={{ width: '25%', height: '100%', flexDirection: 'row' }}>
                                <FontAwesome
                                    name={'child'}
                                    color={Colors.darkgreen}
                                    size={17}
                                />
                                <Text style={{ fontSize: 11, paddingLeft: '15%', textAlignVertical: 'center' }}>Name</Text>
                            </View>

                            <View style={{ width: '25%', height: '100%', flexDirection: 'row' }}>
                                <MaterialCommunityIcons
                                    name={'garage'}
                                    color={Colors.darkgreen}
                                    size={18}
                                />
                                <Text style={{ fontSize: 11, paddingLeft: '5%', textAlignVertical: 'center' }}>9 yrs</Text>
                            </View>

                            <View style={{ width: '25%', height: '100%', flexDirection: 'row' }}>
                                <MaterialCommunityIcons
                                    name={'gender-male-female'}
                                    color={Colors.darkgreen}
                                    size={17}
                                />
                                <Text style={{ fontSize: 11, paddingLeft: '5%', textAlignVertical: 'center' }}>Male</Text>
                            </View>



                        </View>


                    </View>


                    <View style={{ width: '85%', height: '50%',flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end' }}>
                        <TouchableOpacity
                        activeOpacity={0.8}
                        style={{ backgroundColor: 'white', width: '45%', height: '50%',justifyContent:'center',alignItems:'center',borderColor:Colors.darkgreen,borderWidth:1 }}>
                        <Text style={{color:Colors.darkgreen,fontSize:11}}>CANCEL</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                        activeOpacity={0.8}
                        style={{ backgroundColor: Colors.darkgreen, width: '45%', height: '50%',justifyContent:'center',alignItems:'center' }}>
                           <Text style={{color:'white',fontSize:11}}>CONFIRM</Text>
                        </TouchableOpacity>

                    </View>







                </View>


            </View>


        </View>
    )
}


export default FriendRequestModule