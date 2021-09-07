import React from "react";
import { View, Text } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LeftArrow from '../../Assets/icons/LeftArrow'
import RightArrow from '../../Assets/icons/RightArrow'

interface Props {
    height?:string | number,
    width?:string | number
}



const BoxOfTextWithLeftandRightArrows:React.FC<Props> = ({width,height}) => {


     const defaultHeight:string | number = height ? height : '20%'
     const defaultWidth:string | number = width ? width : '100%'
 

    return (
        <View style={{ backgroundColor: 'white', height: defaultHeight, width: defaultWidth, flexDirection: 'row' }}>
            <View style={{ width: '8%', height: '100%',justifyContent:'center',alignItems:'flex-end' }}>
            <LeftArrow size={14} styles={{marginRight:'12%'}} />
            </View>

            <View style={{ width: '84%', height: '100%',justifyContent:'center' }}>

                <View style={{width:'100%',height:'68%',borderWidth:1,borderColor:'lightgrey',justifyContent:'center'}}>
                    <Text numberOfLines={6} style={{paddingHorizontal:9,fontSize:12,textAlign:'center',paddingVertical:9,color:'grey'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, cupiditate voluptas. Eius aperiam repellendus aspernatur, veritatis maiores, nihil fugit optio tempora autem atque officiis. Magnisit tempore magnam. Vero asperiores consequatur animi.

                    </Text>

                </View>

            </View>

            <View style={{  width: '8%', height: '100%',justifyContent:'center',alignItems:'flex-start',paddingLeft:5 }}>
            <RightArrow  size={14} styles={{marginRight:'12%'}}  />
            </View>

        </View>
    )
}

export default BoxOfTextWithLeftandRightArrows