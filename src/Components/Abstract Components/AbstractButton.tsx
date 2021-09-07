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
    style?:object,
    OnPressIn?: () => void
}



const AbstractButton: React.FC<Props> = ({ height, width, disabled, text,OnPressIn,txtSize,style }): JSX.Element => {


    const defaultHeight: string | number = height ? height : 45
    const defaulWidth: string | number = width ? width : '100%'
    const defaultTxt: string = text ? text : 'Add'
    const defaultTxtSize: number = txtSize ? txtSize : 16


    return (
        <React.Fragment>

            {!disabled ?
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1.8, y: 0 }} colors={['#3CBA92', '#0AA360', '#0AA360']}
                    style={[{
                        height: defaultHeight,
                        width: defaulWidth, borderRadius: 2
                    },style]}
                >
                    <TouchableOpacity
                    activeOpacity={0.8}
                        onPress={OnPressIn}
                        style={{
                        height: '100%',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 5,
                        }}
                    >
                        <Text style={{ color: 'white',textAlign:'center', fontSize: defaultTxtSize }}>{defaultTxt}</Text>
                    </TouchableOpacity>
                </LinearGradient>
                :
                <TouchableOpacity
                    onPress={OnPressIn}
                    style={{
                        backgroundColor:'lightgrey',
                        height: defaultHeight,
                        width: defaulWidth,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 5,
                    }}
                >
                    <Text style={{ color: 'white', fontSize: defaultTxtSize,textAlign:'center'}}>{defaultTxt}</Text>
                </TouchableOpacity>
            }

        </React.Fragment>
    )


}


export default AbstractButton