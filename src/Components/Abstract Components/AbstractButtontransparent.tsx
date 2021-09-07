import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';


interface Props {
    width?: string | number,
    height?: string | number
    backgroundColor?: string,
    disabled?: boolean,
    text?: string,
    txtSize?: number,
    OnPressIn?: () => void
}



const AbstractButtontransparent: React.FC<Props> = ({ height, width, disabled, text,OnPressIn,txtSize }): JSX.Element => {


    const defaultHeight: string | number = height ? height : 45
    const defaulWidth: string | number = width ? width : '100%'
    const defaultTxt: string = text ? text : 'Add'
    const defaultTxtSize: number = txtSize ? txtSize : 16


    return (
        <React.Fragment>

          
                    <TouchableOpacity
                        onPress={OnPressIn}
                        style={{
                        height: defaultHeight,
                        width: defaulWidth,
                        borderWidth:1,
                        borderColor:'#0AA360',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 0,
                        }}
                    >
                        <Text style={{ color: '#0AA360',textAlign:'center', fontSize: defaultTxtSize }}>{defaultTxt}</Text>
                    </TouchableOpacity>
            

        </React.Fragment>
    )


}


export default AbstractButtontransparent