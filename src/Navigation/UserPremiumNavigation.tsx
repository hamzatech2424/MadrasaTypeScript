import React from 'react';
import {
    UPAllServiceList, UPApproveChildren, UPEditProfile, UPInvitation, UPMakeDonation, UPMyDonations, UPNotification, UPPendingApproval,
    UPProfile, UPRegisterChild, UPSuggestions, UPVIPMembership, UPViewMembersPremium, 
} from '../Screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


const UserPremiumNavigation = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="UPMainPage"
                component={UPVIPMembership}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
             <Stack.Screen
                name="UPDonationPage"
                component={UPMyDonations}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
            <Stack.Screen
                name="UPMakeDonationPage"
                component={UPMakeDonation}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
            <Stack.Screen
                name="UPSuggestionPage"
                component={UPSuggestions}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
            <Stack.Screen
                name="UPViewMembersPremiumPage"
                component={UPViewMembersPremium}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
            <Stack.Screen
                name="UPInvitationPage"
                component={UPInvitation}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
           
           
              <Stack.Screen
                name="UPProfilePage"
                component={UPProfile}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
              <Stack.Screen
                name="UPEditProfilePage"
                component={UPEditProfile}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
              <Stack.Screen
                name="UPNotificationPage"
                component={UPNotification}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
             <Stack.Screen
                name="UPAllServiceListPage"
                component={UPAllServiceList}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
             
         

        </Stack.Navigator>

    )
}


export default UserPremiumNavigation