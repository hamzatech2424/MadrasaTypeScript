import React, { createRef } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import UserSideNavigation from "./UserSideNavigation";
import LoginNavigation from "./LoginNavigation";
import UserPremiumNavigation from "./UserPremiumNavigation";
import AdminNavigation from "./AdminNavigation";
import ImamNavigation from "./ImamNavigation";
const Stack = createNativeStackNavigator();

const navigationRef: any = createRef();




export function navigate(name: string, params?: string) {
    navigationRef.current?.navigate(name, params)
}

export function goBack() {
    navigationRef.current?.goBack();
}



const Navigation = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
                <Stack.Screen
                    name="WelComePage"
                    component={ImamNavigation}
                    options={{ headerShown: false, animation: 'slide_from_right' }}
                />


            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;







