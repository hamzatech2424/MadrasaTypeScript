import React from "react";
import {View,Text, Image, TouchableOpacity} from 'react-native'


interface Props {
    // IconSend?: (name:string,size:number,color:string) => JSX.Element ,
    image?:any,
    bgColor?:string,
    txtColor?:string,
    txt?:string,
    txtSize?:number,
    width?:string | number,
    height?:string | number,
    OnPressIn?: () => void

}





const AbstractButtonIcon:React.FC<Props> = ({image,bgColor,txtColor,txt,OnPressIn,txtSize,width,height}) =>{

     const defaultBgColor:string = bgColor ? bgColor : '#20D284'
     const defaultTxtColor:string = txtColor ? txtColor : 'white'
     const defaultTxt:string = txt ? txt : 'My Madrassa'
     const defaultTxtSize:number = txtSize ? txtSize : 13
     const defaultWidth:string | number = width ? width : '33.3%'
     const defaultHeight:string | number = height ? height : '100%'
     const defaultImageUrl:any = image ? image : ''


    return(
        <TouchableOpacity
        activeOpacity={1}
        onPress={OnPressIn}

        style={{backgroundColor:defaultBgColor,width:defaultWidth,height:defaultHeight,justifyContent:'center',alignItems:'center'}}>
            <View style={{width:'80%',height:'50%',justifyContent:'center',alignItems:'center'}}>
            <View style={{width:'60%',height:'60%'}}>
             <Image source={defaultImageUrl} style={{height:'100%',width:'100%'}} resizeMode={'contain'} />
            </View>
              <Text style={{color:defaultTxtColor,fontSize:defaultTxtSize,paddingTop:'3%',textAlign:'center'}}>{defaultTxt}</Text>
              </View>
        </TouchableOpacity>
    )
}


export default AbstractButtonIcon