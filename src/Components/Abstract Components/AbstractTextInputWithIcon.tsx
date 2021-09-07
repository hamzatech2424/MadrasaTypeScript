import React from "react";
import {View,TextInput,Text,StyleSheet} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
    width?: string | number,
    height?: string | number,
    placeHolderText?: string,
    placeHolderTextColor?:string,
    valueChange?: string,
    handleChange?: (txt: string) => void,
    label?:string
}



const AbstractTextInputWithIcon:React.FC<Props> = ({ width, height, placeHolderText, valueChange, handleChange, label,placeHolderTextColor }):JSX.Element => {

    const defaultWidth: string | number = width ? width : '80%'
    const defaultHeight: string | number = height ? height : 50
    const defaultplaceHolderText:string = placeHolderText ? placeHolderText : 'DD-MM-YY'
    const defaultplaceHolderTextColor:string = placeHolderTextColor ? placeHolderTextColor : 'lightgrey'
    const defaultLabel:string = label ? label : 'Voted Date'



    return(
      
     <View style={{ backgroundColor: 'white', width: '100%', height:defaultHeight, borderWidth: 1, borderColor: 'lightgrey',flexDirection:'row' }}>
         <TextInput
             style={{ width: '90%', height: '100%', padding: 0, paddingLeft: 15 }}
             placeholder={defaultplaceHolderText}
             placeholderTextColor={defaultplaceHolderTextColor}
             value={valueChange}
             onChangeText={handleChange}
         />
         <View style={{width:'10%',height:'100%',justifyContent:'center',alignItems:'center'}}>

         <MaterialCommunityIcons
              name={'calendar-multiselect'}
              color={'lightgrey'}
              size={20}
            />

         </View>
     </View>
    
    )
}


export default AbstractTextInputWithIcon