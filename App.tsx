import { AuthProvider, useAuth } from './app/contexts/AuthContext';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './app/navigations/TabNavigation';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


import React from 'react'
import CandidateProfile from './app/Screens/CandidateProfile';

export default function App() {
return(

    <AuthProvider>
        <Layout></Layout>
        
    </AuthProvider>

);
}

export const Layout = () => {
    const { authState, onLogout} = useAuth();

    return (
        <NavigationContainer >
            <StatusBar style='light' />

            {/* {authState?.authenticated ? ( */}
            <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={TabNavigation} />
        <Stack.Screen name="CandidateProfile" component={CandidateProfile} />

      </Stack.Navigator>
                


            {/* ) : (
                <Login/>
            )
        } */}
        </NavigationContainer>

    
    );

};
