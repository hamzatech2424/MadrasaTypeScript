import React from 'react';
import {
    ADAddImamByAdmin, ADAdminSIde, ADService, ADAdminServices, ADAnnouncementList, ADApproveChildren, ADApprovePaidMembers, ADCommiteeMember,
    ADCreateAnnouncement, ADCreateInvitation, ADEditProfile, ADEditService, ADImamList, ADInterestedPeople, ADInvitations, ADMakeDonation,
    ADMydonation, ADNotification, ADProfile, ADSuggestions, ADViewMembers,
    USAllServiceList, USApproveChildren, USEditProfile, USMakeDonation, USMemberUpgrade, USMyDonations, USNotification, USPendingApproval,
    USProfile, USRegisterChild, USStandardMembership, USSuggestion, USupgradeMembership,
    UPAllServiceList, UPApproveChildren, UPEditProfile, UPInvitation, UPMakeDonation, UPMyDonations, UPNotification, UPPendingApproval,
    UPProfile, UPRegisterChild, UPSuggestions, UPVIPMembership, UPViewMembersPremium, RegisterUser, SplashScreen, LoginScreen,
    ConfirmPassword, EnterCode, CreateAccount, ForgetPassword, MIEditProfile, MIEditProfile4, MIInvitation, MIMadrassaList, MIMadrassaRequest,
    MINotification, MIProfile, MIStandardMembership,
} from '../Screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();



const ImamNavigation = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="ImamMainPage"
                component={MIStandardMembership}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
            <Stack.Screen
                name="MINotificationPage"
                component={MINotification}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
             <Stack.Screen
                name="MIProfilePage"
                component={MIProfile}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
                <Stack.Screen
                name="MIMadrassaListPage"
                component={MIMadrassaList}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
                 <Stack.Screen
                name="MIMadrassaRequestPage"
                component={MIMadrassaRequest}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
                 <Stack.Screen
                name="MIInvitationPage"
                component={MIInvitation}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />

        </Stack.Navigator>

    )
}


export default ImamNavigation