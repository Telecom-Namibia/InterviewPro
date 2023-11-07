import { AuthProvider, useAuth } from './app/contexts/AuthContext';
import Login from './app/Screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './app/navigations/TabNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function App() {
return(

    <AuthProvider>
        <Layout>
         </Layout>
        
    </AuthProvider>

);
}

export const Layout = () => {
    const { authState, onLogout} = useAuth();

    return (
        <NavigationContainer >

            {/* {authState?.authenticated ? ( */}
                <TabNavigation/>

            {/* ) : (
                <Login/>
            )
        } */}
        </NavigationContainer>

    
    );

};
