import React from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { AbstractButton } from ".";



const AbstractImageUploaderWithBtn: React.FC = () => {
    return (
        <View
            style={{ height: 145, width: 140,justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>

            <View style={{ backgroundColor: 'white', height: 110, width: 110, borderRadius: 55, borderColor: 'grey', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', borderWidth: 1 }}>

                <FontAwesome name={'user'} size={120} color={'grey'} style={{ paddingTop: 15 }} />

            </View>

            <AbstractButton text={'Upload Picture'} height={22} width={'75%'} txtSize={8} />



        </View>
    )
}


export default AbstractImageUploaderWithBtn