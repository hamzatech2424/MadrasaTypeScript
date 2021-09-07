import React from 'react';
import {
    USAllServiceList, USApproveChildren, USEditProfile, USMakeDonation, USMemberUpgrade, USMyDonations, USNotification, USPendingApproval,
    USProfile, USRegisterChild, USStandardMembership, USSuggestion, USupgradeMembership,
} from '../Screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();






const UserSideNavigation = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="USMainPage"
                component={USStandardMembership}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
             <Stack.Screen
                name="USDonationPage"
                component={USMyDonations}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
            <Stack.Screen
                name="USMakeDonationPage"
                component={USMakeDonation}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
            <Stack.Screen
                name="USSuggestionPage"
                component={USSuggestion}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
            <Stack.Screen
                name="USUpgradeMembershipPage"
                component={USupgradeMembership}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
            <Stack.Screen
                name="USPendingApprovalPage"
                component={USPendingApproval}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
            <Stack.Screen
                name="USApproveChildrenPage"
                component={USApproveChildren}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
            <Stack.Screen
                name="USRegisterChildPage"
                component={USRegisterChild}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
              <Stack.Screen
                name="USProfilePage"
                component={USProfile}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
              <Stack.Screen
                name="USEditProfilePage"
                component={USEditProfile}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
              <Stack.Screen
                name="USNotificationPage"
                component={USNotification}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
             <Stack.Screen
                name="USMembershipUpgradePage"
                component={USMemberUpgrade}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
             <Stack.Screen
                name="USAllServiceListPage"
                component={USAllServiceList}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
         

        </Stack.Navigator>

    )
}


export default UserSideNavigation