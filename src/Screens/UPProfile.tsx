import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { ContentContainer } from "../Components/Abstract Components";
import { HeaderUsProfile } from "../Components/Module Components";
import { navigate } from "../Navigation/Navgation";
import { Colors } from "../theme/Color";


const UPProfile: React.FC = () => {
    return (
        <View style={styles.container}>
            <HeaderUsProfile text={'Profile'} OnPressIn={()=>navigate('UPEditProfilePage')} />

            <ContentContainer>
                <View style={styles.ImageMainContainerView}>


                    <View style={styles.firstContainerView}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.exitbtnContainer}>
                            <Image source={require('../Assets/images/Icon3.png')} style={{ width: '40%', height: '40%' }} resizeMode={'contain'} />
                        </TouchableOpacity>

                    </View>

                    <View style={styles.secondContainerView}>
                        <View style={{ width: '100%', height: '80%', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles.imageContainerView}>
                                <Image source={require('../Assets/images/images2.jpg')}
                                    style={{
                                        width: moderateScale(105),
                                        height: moderateScale(105),
                                        borderRadius: moderateScale(52, 5),
                                    }} />
                            </View>
                        </View>

                        <View style={styles.txtnameContainer}>
                            <Text>Member Name</Text>
                            <Text style={{ fontSize: moderateScale(8) }}>January 20, 2021</Text>
                        </View>
                    </View>


                    <View style={styles.thirdContainerView} />

                </View>

                <View style={{ width: '100%', height: '25%' }}>
                    <Text style={{ paddingBottom: moderateScale(10), paddingTop: moderateScale(25), fontSize: moderateScale(14) }}>Bio</Text>

                    <Text style={{ fontSize: moderateScale(10), color: 'grey' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fugit officia nulla cumque sunt itaque maxime eum distinctio eaque beatae omnis dolores, ullam temporibus velit recusandae. Quaerat saepe perferendis veniam?
                    </Text>

                    <Text style={{ fontSize: moderateScale(10), color: 'grey', paddingTop: moderateScale(10) }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fugit officia nulla cumque sunt itaque maxime eum distinctio eaque beatae omnis dolores, ullam temporibus
                    </Text>
                </View>

            </ContentContainer>


        </View>
    )
}


export default UPProfile


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    ImageMainContainerView: {
        width: '100%',
        height: '30%',
        // backgroundColor: 'green',
        flexDirection: 'row'
    },
    firstContainerView: {
        // backgroundColor: 'red',
        width: '30%',
        height: '100%',
        justifyContent: 'center'
    },
    exitbtnContainer: {
        width: moderateScale(24),
        height: moderateScale(24),
        borderRadius: moderateScale(12.5),
        backgroundColor: Colors.darkgreen,
        justifyContent: 'center',
        alignItems: 'center', position: 'absolute',
        right: moderateScale(20)
    },
    secondContainerView: {
        // backgroundColor: 'grey',
        width: '40%',
        height: '100%',
        flexDirection: 'column'
    },
    imageContainerView: {
        marginTop: moderateScale(20),
        width: moderateScale(105),
        height: moderateScale(105),
        borderRadius: moderateScale(52, 5),
        // backgroundColor: 'black'
    },
    txtnameContainer: {
        width: '100%',
        height: '20%',
        //  backgroundColor: 'pink',
        alignItems: 'center'
    },
    thirdContainerView: {
        // backgroundColor: 'red',
        width: '30%',
        height: '100%'
    }
})