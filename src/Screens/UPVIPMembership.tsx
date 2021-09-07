import React from "react";
import { View, StyleSheet } from 'react-native'
import { Colors } from '../theme/Color'
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


const UPVIPMembership: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.MainView}>
                <HeaderVIP text={'VIP Membership'} OnPressIn1={()=>navigate('UPProfilePage')} OnPressIn2={()=>navigate('UPNotificationPage')} />


                <View style={styles.BoxofTextContainerView}>
                    <BoxOfTextWithLeftandRightArrows height={'100%'} />
                </View>


                <View style={styles.BtnContainerView}>
                    <View style={{ flexDirection: 'row', height: '100%' }}>
                        <AbstractButtonIcon width={'33.3%'} txt={'My Madrassa'}  bgColor={'#44B48A'} image={require('../Assets/images/drawable-hdpi/mosque.png')} />
                        <AbstractButtonIcon width={'33.3%'} txt={'My Donation'} OnPressIn={()=>navigate('UPDonationPage')}   bgColor={'#32906E'} image={require('../Assets/images/drawable-hdpi/donation.png')} />
                        <AbstractButtonIcon width={'33.4%'} txt={'Suggestion Box'} OnPressIn={()=>navigate('UPSuggestionPage')}  bgColor={'#28795C'} image={require('../Assets/images/drawable-hdpi/suggestion.png')} />
                    </View>
                </View>



                <View style={styles.MadrassaBtnContainerView}>
                    <AbstractButtonIcon width={'50%'} txt={`KMWA \n Commitee Members`} OnPressIn={()=>navigate('UPViewMembersPremiumPage')} bgColor={'#288161'} image={require('../Assets/images/users.png')} />
                    <AbstractButtonIcon width={'50%'} txt={'My Invites(2)'} OnPressIn={()=>navigate('UPInvitationPage')} bgColor={'#419F7C'} image={require('../Assets/images/invitation.png')} />
                </View>

                <View style={styles.bottombtnContainerView}>
                <AbstractButtonIcon width={'100%'} txt={'Volunteer'} OnPressIn={()=>navigate('UPAllServiceListPage')}  bgColor={'#44B48A'} image={require('../Assets/images/drawable-hdpi/volunteer.png')} />
                </View>


                <View style={styles.TimingContainerView}>
                    <PrayerTimings height={'73%'} width={'85%'} TimingObject={JmmmatTiming} PrayerStartObject={PrayerStratTiming} />
                </View>
                

            </View>
        </View>
    )
}


export default UPVIPMembership



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
    BtnContainerView: {
        // backgroundColor: 'red',
        height: '17%',
        width: '100%',
        flexDirection: 'column'
    },
    MadrassaBtnContainerView: {
        // backgroundColor: 'pink', 
        flexDirection:'row',
        height: '17%',
        width: '100%'
    },
    bottombtnContainerView: {
        height: '17%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    BoxofTextContainerView: {
        // backgroundColor: 'black',
        height: '19%',
        width: '100%'
    },
    TimingContainerView: {
        backgroundColor: '#28795C',
        height: '22%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
  

})