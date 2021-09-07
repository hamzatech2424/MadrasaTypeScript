import React from "react";
import {View,Text} from 'react-native'



const NotificationListModule:React.FC = () =>{
    return(
        <View style={{marginVertical:4,backgroundColor:'white',width:'100%',height:100,justifyContent:'center',alignItems:'center',borderColor:'lightgrey',borderWidth:1}}>
          
        <View style={{width:'90%',height:'85%'}}>
            <Text style={{fontSize:12,paddingBottom:6}}>January 20, 2021</Text>
            <Text style={{fontSize:10,paddingBottom:2}}>Notification Name</Text>
            <Text numberOfLines={3} style={{color:'lightgrey',fontSize:10}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tempore ut quia possimus fuga optio sed illum esse, qui repudiandae dolor, repellat, sint ducimus omnis excepturi officiis exercitationem ad ipsum?
            </Text>

        </View>



        </View>
    )
}


export default NotificationListModule