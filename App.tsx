import { AuthProvider, useAuth } from './app/contexts/AuthContext';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './app/navigations/TabNavigation';
import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import type {StatusBarStyle} from 'react-native';
import VacancyTabNavigator from './app/navigations/CandidatesTabNavigator';


=======
import React from 'react'
>>>>>>> origin/main
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
                <TabNavigation/>


            {/* ) : (
                <Login/>
            )
        } */}
        </NavigationContainer>

    
    );

};
