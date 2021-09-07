import React from "react";
import { View, Text } from 'react-native'


const MyMadrassaChildModule: React.FC = () => {


    return (
        <View style={{ backgroundColor: 'white', width: '100%', height: 70, justifyContent: 'center', alignItems: 'center', borderColor: 'lightgrey', borderWidth: 1 }}>

            <View style={{ width: '90%', height: '70%' }}>
                <Text style={{ fontSize: 9, }}>Child 1</Text>
                <Text style={{ fontSize: 8, color: 'grey' }}>Class: 1st Stage</Text>
                <Text style={{ fontSize: 8, color: 'grey' }}>Subject 1: Lorem ipsum dolor sit amet consectetur Lorem ipsum, dolor sit amet consectetur.</Text>
                <Text style={{ fontSize: 8, color: 'grey' }}>Subject 1: Lorem ipsum dolor sit amet consectetur Lorem ipsum, dolor sit amet consectetur.</Text>
            </View>

        </View>
    )


}


export default MyMadrassaChildModule