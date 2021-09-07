import React,{useState} from "react";
import { View, Text, Dimensions, StyleSheet,KeyboardAvoidingView, ScrollView } from 'react-native'
import { Height } from "../Assets/Height";
import { Header, PaymentMethodModule } from "../Components/Module Components";
import { AbstractButton, AbstractDropDown, AbstractTextInput, ContentContainer } from "../Components/Abstract Components";
import { AbstractButtontransparent, AbstractButtonIcon } from "../Components/Abstract Components";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import CheckBox from '@react-native-community/checkbox';


const Dim = Dimensions.get('screen').height

const UPMakeDonation = () => {

    const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false)


    return (
        <View style={styles.container}>

            <Header text={'Make Donation'} />
            <ContentContainer style={{ width: '90%', height: '100%' }}>

                <View style={styles.SelectAmountContainerView}>
                    <Text style={{ fontSize: moderateScale(15) }}>
                        Select Amount
                    </Text>

                    <View style={styles.BtnsContainerView} >
                        <AbstractButtontransparent width={'19%'} height={'100%'} text={'$50'} txtSize={12} />
                        <AbstractButtontransparent width={'19%'} height={'100%'} text={'$50'} txtSize={12} />
                        <AbstractButtontransparent width={'19%'} height={'100%'} text={'$50'} txtSize={12} />
                        <AbstractButtontransparent width={'19%'} height={'100%'} text={'$50'} txtSize={12} />
                    </View>

                    <AbstractTextInput height={moderateScale(32)} placeHolderText={'$ Custom Amount'} />

                </View>



                <View style={styles.purposeContainerView}>
                <Text style={{ fontSize:  moderateScale(15)}}>
                        Select Purpose
                    </Text>

                    <AbstractDropDown 
                    placeholder={{label:'List of Companies',value:null,color:'lightgrey'}}
                    arrayOptions={[{label:'Sitara',value:'Sitara'},{label:'Hilal',value:'Hilal'}]}
                     height={moderateScale(32)} IconTop={5} />
                </View>



                <KeyboardAvoidingView
                behavior={'height'}
                style={styles.PaymentMethodContainerView}>
                    <ScrollView>
                <Text style={{ fontSize:  moderateScale(15) }}>
                        Payment Method
                    </Text>

                    <View style={styles.ButtonsContainer}> 
                    <AbstractButtontransparent width={'48%'} height={'100%'} text={'Credit Card'} txtSize={12} />
                        <AbstractButtontransparent width={'48%'} height={'100%'} text={'Paypal'} txtSize={12} />
                    </View>

                    <PaymentMethodModule />

                    <View style={{marginTop:20}}>
                        <Text style={{fontSize:moderateScale(10)}}>Term and Conditions</Text>
                        <View style={{flexDirection:'row',alignItems:'center'}}>

                            <CheckBox
                            tintColors={{ true: '#3CBA92', false: 'lihtgrey' }}
                                disabled={false}
                                value={toggleCheckBox}
                                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            />
                            <Text style={{ fontSize: moderateScale(10), paddingTop: moderateScale(4) }}>I agree to these terms and Conditions</Text>


                            </View>
                        
                    </View>

                    </ScrollView>
                </KeyboardAvoidingView>

              <View style={{marginTop:20}}>
              <AbstractButton text={'Proceed'} />
              </View>
                



            </ContentContainer>
        </View>
    )
}

export default UPMakeDonation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
        // backgroundColor: 'red'
    },
    SelectAmountContainerView:{
        height: Height(Dim, '16%'),
         marginTop: '5%', 
        width: '100%', 
        justifyContent: 'space-between'
    },
    BtnsContainerView:{
        height: moderateScale(32),
         flexDirection: 'row',
          justifyContent: 'space-between'
    },
    purposeContainerView:{
        height: Height(Dim, '9%'),
        marginTop: '8%',
        width: '100%',
        justifyContent:'space-between'
    },
    ButtonsContainer:{
        // backgroundColor:'red',
        height:moderateScale(43),
        width:'100%',
        justifyContent:'space-between',
        flexDirection:'row',
        marginVertical:moderateScale(13)
    },
    PaymentMethodContainerView:{
        height: Height(Dim, '42%'), 
        marginTop: '8%',
        //  backgroundColor: 'blue', 
         width: '100%' 
    }
})