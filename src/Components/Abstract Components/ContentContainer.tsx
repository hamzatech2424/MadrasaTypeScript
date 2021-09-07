import React from "react";
import {View,Text} from 'react-native'


interface Props {
    children?:React.ReactNode,
    style?:object,
    bgColor?:string
}



const ContentContainer:React.FC<Props> = ({children,bgColor,style}) =>{
    return(
        <View style={[{width:'90%',alignSelf:'center',backgroundColor:bgColor,height:'100%'},style]}>
           {children}
        </View>
    )
}

export default ContentContainer