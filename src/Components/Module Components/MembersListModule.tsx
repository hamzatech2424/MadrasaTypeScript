import React from "react";
import { View, Text, Image } from 'react-native'


const MembersListModule: React.FC = () => {
    return (
        <View style={{ marginVertical:4,backgroundColor: 'white', width: '100%', height: 130, flexDirection: 'row', borderWidth: 1, borderColor: 'lightgrey' }}>
            <View style={{ width: '20%', height: '100%', justifyContent: 'flex-start' }}>
                <View style={{ width: 35, height: 35, borderRadius: 17.5, right: 20, position: 'absolute', top: 10 }}>
                    <Image source={require('../../Assets/images/images2.jpg')} style={{ width: 35, height: 35, borderRadius: 17.5 }} />
                </View>
            </View>


            <View style={{ width: '80%', height: '100%', justifyContent: 'center' }}>
                <View style={{ width: '85%', height: '80%' }}>

                    <Text style={{ color: 'black', fontSize: 12 }}>Member Name</Text>
                    <Text style={{ color: 'grey', fontSize: 10, paddingBottom: 5 }}>Jan 22,2021</Text>
                    <Text style={{ color: 'black', fontSize: 10 }}>Details:</Text>
                    <Text numberOfLines={4} style={{ color: 'grey', fontSize: 10 }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur qui, beatae repellendus adipisci officia dolores placeat delectus laudantium id rem, quia voluptates iusto quasi provident dolore voluptatem, corporis veniam ea. </Text>

                </View>

            </View>


        </View>
    )
}



export default MembersListModule