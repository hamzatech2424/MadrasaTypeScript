import React from 'react';
import {
    RegisterUser, LoginScreen,
    ConfirmPassword, EnterCode, ForgetPassword,
} from '../Screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const LoginNavigation = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="LoginPage"
                component={LoginScreen}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
            <Stack.Screen
                name="ForgetPage"
                component={ForgetPassword}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
             <Stack.Screen
                name="RegisterPage"
                component={RegisterUser}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
                <Stack.Screen
                name="EnterCodePage"
                component={EnterCode}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />
                 <Stack.Screen
                name="ConfirmPassPage"
                component={ConfirmPassword}
                options={{ headerShown: false, animation: 'slide_from_right' }}
            />

        </Stack.Navigator>

    )
}


export default LoginNavigation