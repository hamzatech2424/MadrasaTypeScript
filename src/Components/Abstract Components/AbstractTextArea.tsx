import React from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native'

interface Props {
    width?: string | number,
    height?: string | number,
    placeHolderText?: string,
    placeHolderTextColor?: string,
    placeHolderTextSizes?:  number,
    valueChange?: string,
    handleChange?: (txt: string) => void,
}




const AbstractTextArea: React.FC<Props> = ({ width, height, placeHolderTextColor,placeHolderText,placeHolderTextSizes, valueChange, handleChange }): JSX.Element => {

    const defaultWidth: string | number = width ? width : '100%'
    const defaultHeight: string | number = height ? height : 210
    const defaultplaceHolderText: string = placeHolderText ? placeHolderText : 'Enter Description'
    const defaultplaceHolderTextSize: number = placeHolderTextSizes ? placeHolderTextSizes : 15
    const defaultplaceHolderTextColor: string = placeHolderTextColor ? placeHolderTextColor : 'lightgrey'

    return (
        <React.Fragment>

            <View style={{ width: defaultWidth, height: defaultHeight, justifyContent: 'space-between' }}>
                <View style={{ backgroundColor: 'white', width: '100%', height: '100%', borderWidth: 1, borderColor: 'lightgrey' }}>
                    <TextInput
                        style={[{ height: 'auto', justifyContent: "flex-start", padding: 0, paddingTop: 5, paddingLeft: 15, paddingRight: 15} ,{fontSize:defaultplaceHolderTextSize}]}
                        placeholder={defaultplaceHolderText}
                        placeholderTextColor={defaultplaceHolderTextColor}
                        value={valueChange}
                        onChangeText={handleChange}
                        multiline={true}
                    />
                </View>
            </View>

        </React.Fragment>
    )

}


export default AbstractTextArea