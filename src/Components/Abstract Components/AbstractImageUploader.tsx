import React from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const AbstractImageUploader: React.FC = () => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={{ height: 140, width: 140, justifyContent: 'center', alignItems: 'center', position: 'relative' }}>

            <View style={{ backgroundColor: 'white', height: 110, width: 110, borderRadius: 55, borderColor: 'grey', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', borderWidth: 1 }}>

                <FontAwesome name={'user'} size={120} color={'grey'} style={{ paddingTop: 15 }} />

            </View>


            <View style={{ backgroundColor: 'white', height: 24, width: 24, borderRadius: 12, borderColor: 'grey', justifyContent: 'center', alignItems: 'center', borderWidth: 1, position: 'absolute', bottom: 20, right: 20, zIndex: 1 }}>
                <FontAwesome name={'camera'} size={12} color={'grey'} />
            </View>



        </TouchableOpacity>
    )
}


export default AbstractImageUploader