import { AuthProvider, useAuth } from './app/contexts/AuthContext';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './app/navigations/TabNavigation';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


import React from 'react'
import CandidateProfile from './app/Screens/CandidateProfile';
<<<<<<< HEAD
=======
import Candidates from './app/Screens/Candidates';
import InterviewDetails from './app/Screens/InterviewDetails';
import InterviewSchedule from './app/Screens/InterviewSchedule';
import InterviewQuestionnaire from './app/Screens/InterviewQuestionnaire';
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
            <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={TabNavigation} />
        <Stack.Screen name="CandidateProfile" component={CandidateProfile} />
<<<<<<< HEAD
=======
        <Stack.Screen name="Interview Details" component={InterviewDetails} />
        <Stack.Screen name="Interview Schedule" component={InterviewSchedule} />
        <Stack.Screen name='Interview Questionnaire' component={InterviewQuestionnaire} />
>>>>>>> origin/main

      </Stack.Navigator>
                


            {/* ) : (
                <Login/>
            )
        } */}
        </NavigationContainer>

    
    );

};
