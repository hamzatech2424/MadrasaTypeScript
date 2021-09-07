import React from "react";
import { View, StyleSheet } from 'react-native'
import { Colors } from '../theme/Color'
import { AbstractButton, AbstractButtonIcon } from "../Components/Abstract Components";
import { HeaderVIP, BoxOfTextWithLeftandRightArrows, PrayerTimings } from "../Components/Module Components";
import { navigate } from "../Navigation/Navgation";



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


const MIStandardMembership: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.MainView}>
                <HeaderVIP text={'Dashboard'} OnPressIn1={()=>navigate('MIProfilePage')} OnPressIn2={()=>navigate('MINotificationPage')} />


                <View style={styles.BoxofTextContainerView}>
                    <BoxOfTextWithLeftandRightArrows height={'100%'} />
                </View>




                <View style={styles.MadrassaBtnContainerView}>
                <AbstractButtonIcon OnPressIn={()=>navigate('MIMadrassaListPage')} width={'60%'} txt={'My Madrassa'} bgColor={'#44B48A'} image={require('../Assets/images/drawable-hdpi/mosque.png')} />
                    <AbstractButtonIcon OnPressIn={()=>navigate('MIInvitationPage')} width={'40%'} txt={'Invitation List'} bgColor={'#288161'} image={require('../Assets/images/invitation.png')} />
                </View>

                <View style={styles.BoxofTextContainerView2}>
                    <BoxOfTextWithLeftandRightArrows height={'80%'} />
                </View>


                <View style={styles.TimingContainerView}>
                    <PrayerTimings height={'73%'} width={'85%'} TimingObject={JmmmatTiming} PrayerStartObject={PrayerStratTiming} />
                </View>
                

            </View>
        </View>
    )
}


export default MIStandardMembership



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
 
    MadrassaBtnContainerView: {
        // backgroundColor: 'pink', 
        flexDirection:'row',
        height: '17%',
        width: '100%'
    },
  
    BoxofTextContainerView: {
        // backgroundColor: 'black',
        height: '22%',
        width: '100%'
    },
    BoxofTextContainerView2: {
        // backgroundColor: 'black',
        height: '26%',
        width: '100%'
    },
    TimingContainerView: {
        backgroundColor: '#28795C',
        height: '24%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
  

})