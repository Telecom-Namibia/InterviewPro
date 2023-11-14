import { AuthProvider, useAuth } from './app/contexts/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './app/navigations/TabNavigation';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import Vacancies from './app/Screens/Vacancies';
import AddVacancyForm from './app/components/Vacancies/AddVacancyForm';
import CandidateProfile from './app/Screens/CandidateProfile';
import InterviewDetails from './app/Screens/InterviewDetails';
import InterviewSchedule from './app/Screens/InterviewSchedule';
import InterviewQuestionnaire from './app/Screens/InterviewQuestionnaire';

const Stack = createStackNavigator();

export const Layout = () => {
  const { authState, onLogout } = useAuth();

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={TabNavigation} />
        <Stack.Screen name="CandidateProfile" component={CandidateProfile} />
        <Stack.Screen name="Interview Details" component={InterviewDetails} />
        <Stack.Screen name="Interview Schedule" component={InterviewSchedule} />
        <Stack.Screen
          name="Interview Questionnaire"
          component={InterviewQuestionnaire}
        />
        <Stack.Screen name="Vacancies" component={Vacancies} />
        <Stack.Screen name="AddVacancyForm" component={AddVacancyForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}
