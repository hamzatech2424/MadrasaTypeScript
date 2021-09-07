import React,{useState} from "react";
import {View,Text, StyleSheet} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Props {
    arrayOptions: {label:string,value:string}[]
    placeholder:{label:string,value:any,color:string},
    placeholderTextColor?:string,
    backColor?:string,
    height?:string | number,
    IconTop?: number
}



const AbstractDropDown:React.FC<Props> = ({placeholder,placeholderTextColor,arrayOptions,backColor,height,IconTop}) => {

    const [selectedLanguage, setSelectedLanguage] = useState<string>('');


    const defaultPlaceholder = placeholder ? placeholder : "Placeholder"
    const defaultplaceholderTextColor = placeholderTextColor ? placeholderTextColor : "black"
    const defaultHeight = height ? height : 45
    const defaultIconTop = IconTop ? IconTop : 10

  
  // const placeholder = {
  //       label: 'Gender',
  //       value: null,
  //       color: 'black',
  //     };

      const pickerSelectStyles = StyleSheet.create({
        inputAndroid: {
         height:'100%',
         width:'100%',
          fontSize: 11,
          paddingHorizontal: 15,
        //   paddingVertical: 8,
          borderWidth: 1,
          borderColor: 'lightgrey',
          color: defaultplaceholderTextColor,
          backgroundColor:backColor,
          paddingRight: 30, // to ensure the text is never behind the icon,
          
        },
      });



    return(
        <React.Fragment>
             <View style={{width:'100%',height:defaultHeight}}>
            
             <RNPickerSelect
             placeholder={placeholder}
            style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: defaultIconTop,
                  right: 12,
                  
                },
              }}
             useNativeAndroidPickerStyle={false}
            onValueChange={(value:string) => setSelectedLanguage(value)}
            items={arrayOptions}
            Icon={() => {
                return <MaterialIcons name="arrow-drop-down" size={24} color="black" />;
              }}
        />
           
                
        
                </View>
                
        </React.Fragment>
    )
}

export default AbstractDropDown


