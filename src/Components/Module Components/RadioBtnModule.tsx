import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';



interface Props {
    size:string,
}



const RadioBtnModule:React.FC = () => {

   

    const [radioValue, setradioValue] = useState(0)

    var radio_props = [
        { label: 'Yes', value: "Yes" },
        { label: 'No', value: "No" }
    ];

  


    return (
        <View>


            <RadioForm
                radio_props={radio_props}
                initial={1}
                animation={true}
                buttonSize={7}
                buttonOuterSize={15}
                formHorizontal={true}
                labelHorizontal={true}
                selectedButtonColor={'#0AA360'}
                buttonColor={'lightgrey'}
                onPress={(value) => setradioValue(value)}
                buttonStyle={{marginTop:5}}
                style={{height:15,justifyContent:'space-between',width:'45%',marginLeft:10,marginTop:5,alignItems:'center'}}
                labelStyle={{marginBottom:0,fontSize:11}}
            /> 


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default RadioBtnModule