import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'

interface Props {
    width?: string | number,
    height?: string | number,
    placeHolderText?: string
    placeHolderTextColor?: string
    valueChange?: string,
    handleChange?: (txt: string) => void,
    withLabel?: boolean,
    label?:string
    secureText?: boolean
}



const AbstractTextInput: React.FC<Props> = ({ width, height, placeHolderText,placeHolderTextColor,secureText ,valueChange, handleChange, withLabel,label }): JSX.Element => {


    const defaultWidth: string | number = width ? width : '100%'
    const defaultHeight: string | number = height ? height : 45
    const defaultplaceHolderText:string = placeHolderText ? placeHolderText : 'Email'
    const defaultLabel:string = label ? label : 'First Name'
    const defaultplaceHolderTextColor:string = placeHolderTextColor ? placeHolderTextColor : 'lightgrey'
  

    return (
        <React.Fragment>

            {!withLabel ?
                <View style={{ backgroundColor: 'white', width: defaultWidth, height: defaultHeight, borderWidth: 1, borderColor: 'lightgrey' }}>
                    <TextInput
                        style={{ width: '100%', height: '100%', padding: 0, paddingLeft: 15,fontSize:11 }}
                        placeholder={defaultplaceHolderText}
                        placeholderTextColor={defaultplaceHolderTextColor}
                        value={valueChange}
                        onChangeText={handleChange}
                        secureTextEntry={secureText}
                    />
                </View>
                :
                <View style={{width:defaultWidth,height:80,justifyContent:'space-between'}}>
                   <Text>{defaultLabel}</Text>
                <View style={{ backgroundColor: 'white', width: '100%', height:defaultHeight, borderWidth: 1, borderColor: 'lightgrey' }}>
                    <TextInput
                        style={{ width: '100%', height: '100%', padding: 0, paddingLeft: 15 }}
                        placeholder={defaultplaceHolderText}
                        placeholderTextColor={defaultplaceHolderTextColor}
                        value={valueChange}
                        onChangeText={handleChange}
                        secureTextEntry={secureText}
                    />
                </View>
                </View>
            }

        </React.Fragment>

    )
}


export default AbstractTextInput