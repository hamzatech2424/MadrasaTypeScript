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
    MINotification, MIProfile,
} from '../Screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();



const AdminNavigation = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="AdminMainPage"
                component={ADAdminSIde}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
             <Stack.Screen
                name="ADViewMembersPage"
                component={ADViewMembers}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
            <Stack.Screen
                name="ADCommiteeMemberPage"
                component={ADCommiteeMember}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
            <Stack.Screen
                name="ADAnnouncementListPage"
                component={ADAnnouncementList}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
            <Stack.Screen
                name="ADCreateAnnouncementPage"
                component={ADCreateAnnouncement}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
            <Stack.Screen
                name="ADMydonationPage"
                component={ADMydonation}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
           
           
              <Stack.Screen
                name="ADMakeDonationPage"
                component={ADMakeDonation}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
              <Stack.Screen
                name="ADSuggestionsPage"
                component={ADSuggestions}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
              <Stack.Screen
                name="ADInvitationsPage"
                component={ADInvitations}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
             <Stack.Screen
                name="ADCreateInvitationPage"
                component={ADCreateInvitation}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
             <Stack.Screen
                name="ADApprovePaidMembersPage"
                component={ADApprovePaidMembers}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
             <Stack.Screen
                name="ADProfilePage"
                component={ADProfile}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
             <Stack.Screen
                name="ADEditProfilePage"
                component={ADEditProfile}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
             <Stack.Screen
                name="ADApproveChildrenPage"
                component={ADApproveChildren}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
             <Stack.Screen
                name="ADImamListPage"
                component={ADImamList}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
              <Stack.Screen
                name="ADAddImamByAdminPage"
                component={ADAddImamByAdmin}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
             <Stack.Screen
                name="ADNotificationPage"
                component={ADNotification}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
             <Stack.Screen
                name="ADAdminServicesPage"
                component={ADAdminServices}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
              <Stack.Screen
                name="ADServicePage"
                component={ADService}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
             <Stack.Screen
                name="ADEditServicePage"
                component={ADEditService}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
             <Stack.Screen
                name="ADInterestedPeoplePage"
                component={ADInterestedPeople}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
             
             
         

        </Stack.Navigator>

    )
}


export default AdminNavigation