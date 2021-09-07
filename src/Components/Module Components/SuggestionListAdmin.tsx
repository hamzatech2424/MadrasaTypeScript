import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Colors } from "../../theme/Color";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const SuggestionListAdmin: React.FC = () => {
    return (
        <View style={{marginVertical:4 ,backgroundColor: 'white', width: '100%', height: 115, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'lightgrey' }}>


            <View style={{ width: '90%', height: '85%', justifyContent: 'center', }}>
                <View style={{ width: '100%', height: '100%', flexDirection: 'column' }}>

                    <View style={{ width: '100%', height: '28%',  flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: 'black', fontSize: 12 }}>January 20, 2021</Text>


                        <View style={{marginTop:'3%',width: '45%', height: '80%', justifyContent: 'flex-end', flexDirection: 'row' }}>
                        
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={{ backgroundColor: '#FF3B3B', width: '35%', height: '90%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 9, color: 'white' }}>Resolve</Text>
                            </TouchableOpacity>
                        </View>




                    </View>

                    <View style={{ width: '100%', height: '70%'}}>
                        <Text style={{ color: 'black', fontSize: 10 }}>Suggestion Name</Text>
                        <Text numberOfLines={3} style={{ color: 'grey', fontSize: 10 }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur qui, beatae repellendus adipisci officia dolores placeat delectus laudantium id rem, quia voluptates iusto quasi provident dolore voluptatem, corporis veniam ea. </Text>
                    </View>

                </View>

            </View>


        </View>
    )
}



export default SuggestionListAdmin