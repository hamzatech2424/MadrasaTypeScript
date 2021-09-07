import React from "react";
import { View,StyleSheet } from 'react-native'
import { AbstractButton, AbstractButtonIcon } from "../Components/Abstract Components";
import { HeaderVIP, BoxOfTextWithLeftandRightArrows, PrayerTimings } from "../Components/Module Components";
import {navigate} from '../Navigation/Navgation'



interface JamatObj {
    Fajr: string,
    Duhr: string,
    Asr: string,
    Magrib: string,
    Isha: string
}

const JmmmatTiming: JamatObj = {
    Fajr: '04:00',
    Duhr: '05:00',
    Asr: '04:00',
    Magrib: '04:00',
    Isha: '04:00',
}

const PrayerStratTiming: JamatObj = {
    Fajr: '04:30',
    Duhr: '05:30',
    Asr: '04:30',
    Magrib: '04:30',
    Isha: '04:30',
}


const USStandardMembership: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.MainView}>

                <View style={styles.HeaderAndBtnContainerView}>
                    <HeaderVIP text={'Standard Membership'} OnPressIn1={()=>navigate('USProfilePage')} OnPressIn2={()=>navigate('USNotificationPage')} />
                    <View style={{ flexDirection: 'row' }}>
                        <AbstractButtonIcon OnPressIn={()=>navigate('USAllServiceListPage')} width={'33.3%'} txt={'Volunteer'} bgColor={'#44B48A'} image={require('../Assets/images/drawable-hdpi/volunteer.png')} />
                        <AbstractButtonIcon OnPressIn={()=>navigate('USDonationPage')} width={'33.3%'} txt={'My Donation'} bgColor={'#32906E'} image={require('../Assets/images/drawable-hdpi/donation.png')} />
                        <AbstractButtonIcon OnPressIn={()=>navigate('USSuggestionPage')} width={'33.4%'} txt={'Suggestion Box'} bgColor={'#28795C'} image={require('../Assets/images/drawable-hdpi/suggestion.png')} />
                    </View>
                </View>

                <View style={styles.MadrassaBtnContainerView}>
                    <AbstractButtonIcon OnPressIn={()=>navigate('USApproveChildrenPage')} width={'100%'} txt={'My Madrassa'} bgColor={'#289F72'} image={require('../Assets/images/drawable-hdpi/mosque.png')} />
                </View>


                <View style={styles.BoxofTextContainerView}>
                    <BoxOfTextWithLeftandRightArrows height={'100%'} />
                </View>


                <View style={styles.TimingContainerView}>
                    <PrayerTimings height={'73%'} width={'85%'} TimingObject={JmmmatTiming} PrayerStartObject={PrayerStratTiming} />
                </View>


                <View style={styles.bottombtnContainerView}>
                    <AbstractButton OnPressIn={()=>navigate('USUpgradeMembershipPage')} width={'80%'} text={'Upgrade Membership'} />
                </View>

            </View>
        </View>
    )
}


export default USStandardMembership



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    MainView: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    HeaderAndBtnContainerView: {
        // backgroundColor: 'red',
        height: '26%',
        width: '100%',
        flexDirection: 'column'
    },
    MadrassaBtnContainerView: {
        // backgroundColor: 'pink', 
        height: '19%',
        width: '100%'
    },
    BoxofTextContainerView: {
        backgroundColor: 'black',
        height: '20%',
        width: '100%'
    },
    TimingContainerView: {
        backgroundColor: '#28795C',
        height: '23%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottombtnContainerView: {
        height: '12%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }

})