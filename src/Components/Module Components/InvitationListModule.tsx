import React from "react";
import {View,Text} from 'react-native'


interface Props {
    Admin?:boolean
}



const InvitationListModule:React.FC<Props> = ({Admin}) =>{
    return(
        <View style={{marginVertical:4,backgroundColor:'white',width:'100%',height:110,justifyContent:'center',alignItems:'center',borderColor:'lightgrey',borderWidth:1}}>
          
        <View style={{width:'90%',height:'90%'}}>
            <Text style={{fontSize:12,paddingBottom:6,paddingTop:8}}>January 20, 2021</Text>
            {Admin?
            <Text style={{fontSize:10,paddingBottom:2}}>Invitation Name:</Text>
            :
            <Text style={{fontSize:10,paddingBottom:2}}>Details:</Text>
            }
            <Text numberOfLines={3} style={{color:'lightgrey',fontSize:10}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tempore ut quia possimus fuga optio sed illum esse, qui repudiandae dolor, repellat, sint ducimus omnis excepturi officiis exercitationem ad ipsum?
            </Text>

        </View>



        </View>
    )
}


export default InvitationListModule