import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dashboard from '../Screens/Dashboard';
import Interviews from '../Screens/Interviews';
import Vacancies from '../Screens/Vacancies';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import More from '../Screens/More';
import Candidates from '../Screens/Candidates';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
        <Tab.Navigator screenOptions={{
          headerShown: false
        }}>
            <Tab.Screen name="InterviewPro" component={Dashboard} options={{tabBarIcon:({color,size}) => (<AntDesign name="home" size={size} color={color} />) }}/>
            <Tab.Screen name='Interviews' component={Interviews} options={{tabBarIcon:({color,size}) => <AntDesign name="calendar" size={size} color={color} /> }}/>
            <Tab.Screen name='Candidates' component={Candidates} options={{tabBarIcon:({color,size}) => <Ionicons name="people-outline" size={size} color={color} /> }}/>
            <Tab.Screen name='Vacancies' component={Vacancies} options={{tabBarIcon:({color,size}) => (<MaterialCommunityIcons name="archive-search-outline" size={size} color={color} />) }}/>
            <Tab.Screen name='More' component={More} options={{tabBarIcon:({color,size}) => (<AntDesign name="profile" size={size} color={color} />) }}/>
        </Tab.Navigator>
  )
}

export default TabNavigation