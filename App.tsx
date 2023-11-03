import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import AppNav from './app/Screens/AppNav';
import { AuthProvider, useAuth } from './app/contexts/AuthContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './app/Screens/Dashboard';
import Login from './app/Screens/Login';

import {NavigationContainer} from '@react-navigation/native';

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
    <NavigationContainer>
        <Stack.Navigator>
            {authState?.authenticated ? (
                <Stack.Screen name="Dashboard" component={Dashboard} options={{
                    headerRight: () => <Button onPress={onLogout} title='Sign Out' />,
                }}></Stack.Screen>
            ) : (
                <Stack.Screen name='Login' component={Login}></Stack.Screen>
            )
        }
        </Stack.Navigator>
    </NavigationContainer>);

};
