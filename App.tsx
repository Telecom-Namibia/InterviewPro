import { AuthProvider, useAuth } from './app/contexts/AuthContext';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './app/navigations/TabNavigation';
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


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
