import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text , FlatList, TouchableOpacity, StyleSheet} from "react-native";
import { LogBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Project {
  name: string;
  description: string;
}

interface Interview {
    id: number;
    title: string;
    dateTime: string;
    interviewers: string[];
    status: string;
    description: string;
    location: string;
    location_url: string;
    interview_type: string;
    duration: number;
    reschedule_reason: string;
    reschedule_date: string | null;
    rejection_reasons: string;
    follow_up_actions: string;
    interviewer_notes: string;
    schedule: Candidate[];
    questionnaire: Question[];
  }
interface Question{
    question: string;
    answers: string[];
}
interface Candidate {
  id: number;
  name: string;
  grade: number;
  email: string;
  phone: string;
  address: string;
  skills: string[];
  experience: string;
  education: string;
  languages: string[];
  certifications: string[];
  projects: Project[];
}

interface Vacancy {
  id: number;
  title: string;
  department: string;
  level: string;
  summary: string;
  responsibilities: string[];
  minimum_qualifications: string[];
  preferred_qualifications: string[];
  certifications: string[];
  projects: Project[];
  interviews: Interview[];
  candidates: Candidate[];
}
interface InterviewTabsProps {
  vacancies: Vacancy[];
  interviews: Record<string, Interview[]>;


}


interface InterviewTabNavigatorProps {
  interview: Interview[];
}

const Tab = createMaterialTopTabNavigator();



export const InterviewTabNavigator: React.FC<InterviewTabsProps> = ({ vacancies }) => {
  
  const navigation = useNavigation();

  
  const handlePress = (interview: Interview) => {
    navigation.navigate('Interview Details', { interview });

  };
  LogBox.ignoreLogs(['Sending `onAnimatedValueUpdate` with no listeners registered.']);
 


  return (
    <Tab.Navigator
    screenOptions={{
      
      tabBarIndicatorStyle: { backgroundColor: '#1F2F47' },
    }}
    >
        {vacancies.map(vacancy => (
          <Tab.Screen
            name={vacancy.title}
            key={vacancy.id}
            options={{
              tabBarLabel: ({ focused, color }) => (
                <Text style={{ fontSize: 10, color }}>{vacancy.title}</Text>
              ),
            }}
            children={() => (
              
              <FlatList
                data={vacancy.interviews}
                keyExtractor={(item: Interview) => item.id.toString()}
                showsVerticalScrollIndicator={false} // Hide vertical scrollbar
      showsHorizontalScrollIndicator={false} 
                renderItem={({ item }: { item: Interview }) => {
                  return (
                    <TouchableOpacity onPress={() => handlePress(item)}>
                      <View style={{ flexDirection: 'row',alignItems:'center', justifyContent: 'space-between', backgroundColor: '#fff', margin: 10, padding: 20, borderRadius: 5,  shadowColor: 'rgba(0, 0, 0, 0.1)', shadowOffset: { width: 0, height: 2 },shadowRadius: 6,elevation: 5,shadowOpacity: 1, }}>
                        <View style={{ backgroundColor: 'black', borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
                          <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>{item.title.charAt(0).toUpperCase()}</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                          <Text style={{ fontSize: 16, fontWeight: '600' }}>{item.title}</Text>
                          </View>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            )}
          />
        ))}
      </Tab.Navigator>
  );

};


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 20,
    fontWeight: '700',
  },
});

