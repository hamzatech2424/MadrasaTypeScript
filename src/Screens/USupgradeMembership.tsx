import React,{useState} from "react";
import { View, Text, Dimensions, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Height } from "../Assets/Height";
import { Header, PaymentMethodModule } from "../Components/Module Components";
import { AbstractButton, AbstractTextInput, AbstractButtontransparent, ContentContainer, AbstractTextInputWithIcon } from "../Components/Abstract Components";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import CheckBox from '@react-native-community/checkbox';
import { navigate } from "../Navigation/Navgation";


const Dim = Dimensions.get('screen').height

const USupgradeMembership: React.FC = () => {

    const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false)



    return (
        <View style={styles.container}>

            <Header text={'Upgrade MemberShip'} />
            <ContentContainer style={{ width: '90%', height: '100%' }}>

                <View style={styles.SelectAmountContainerView}>
                    <Text style={{ fontSize: moderateScale(15), paddingTop: moderateScale(35), paddingBottom: moderateScale(10) }}>
                        Date of Birth
                    </Text>

                    <AbstractTextInputWithIcon height={moderateScale(32)} placeHolderText={'DD-MM-YY'} />

                </View>



                <View style={styles.purposeContainerView}>
                    <Text style={{ fontSize: moderateScale(15), paddingBottom: moderateScale(10) }}>
                        Post Code
                    </Text>

                    <AbstractTextInput height={moderateScale(32)} placeHolderText={'Enter Post Code'} />
                </View>



                <KeyboardAvoidingView
                    behavior={'height'}
                    style={styles.PaymentMethodContainerView}>
                    <ScrollView>
                        <Text style={{ fontSize: moderateScale(15) }}>
                            Payment Method
                        </Text>

                        <View style={styles.ButtonsContainer}>
                            <AbstractButtontransparent width={'48%'} height={'100%'} text={'Credit Card'} txtSize={12} />
                            <AbstractButtontransparent width={'48%'} height={'100%'} text={'Paypal'} txtSize={12} />
                        </View>

                        <PaymentMethodModule />

                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontSize: moderateScale(10) }}>Term and Conditions</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

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

                <View style={{ marginTop: moderateScale(5) }}>
                    <AbstractButton text={'Proceed'} OnPressIn={()=>navigate('USMembershipUpgradePage')} />
                </View>




            </ContentContainer>
        </View>
    )
}

export default USupgradeMembership

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
        // backgroundColor: 'red'
    },
    SelectAmountContainerView: {
        height: Height(Dim, '12%'),
        marginTop: moderateScale(15),
        width: '100%',
        // backgroundColor:'green',

    },
    BtnsContainerView: {
        height: moderateScale(32),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    purposeContainerView: {
        height: Height(Dim, '10%'),
        marginTop: moderateScale(45),
        width: '100%',
        // backgroundColor:'red'


    },
    ButtonsContainer: {
        // backgroundColor:'red',
        height: moderateScale(43),
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: moderateScale(13)
    },
    PaymentMethodContainerView: {
        height: Height(Dim, '44%'),
        marginTop: moderateScale(25),
        //  backgroundColor: 'blue', 
        width: '100%',
        justifyContent: 'center'
    }
})