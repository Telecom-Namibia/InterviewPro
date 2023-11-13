import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text , FlatList, TouchableOpacity, StyleSheet} from "react-native";
import { LogBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';


interface Vacancy {
  id: string;
  title: string;
}

interface Project {
  name: string;
  description: string;
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
interface CandidatesTabsProps {
  vacancies: Vacancy[];
  candidates: Record<string, Candidate[]>;


}


interface CandidatesTabNavigatorProps {
  candidates: Candidate[];
}

const Tab = createMaterialTopTabNavigator();

export const CandidatesTabNavigator: React.FC<CandidatesTabsProps> = ({ vacancies, candidates}) => {
  
  const navigation = useNavigation();

  const getGradeColor = (grade: number) => {
    if (grade > 80) return 'green';
    if (grade > 50) return 'orange';
    return 'red';
  };
  const handlePress = (candidate: Candidate) => {
    navigation.navigate('CandidateProfile', { candidate });
  };
  LogBox.ignoreLogs(['Sending `onAnimatedValueUpdate` with no listeners registered.']);
  const colorArray = ['#FF5733', '#C70039', '#900C3F', '#581845', '#FFC300', '#DAF7A6', '#FF5733', '#C70039', '#900C3F', '#581845'];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colorArray.length);
  return colorArray[randomIndex];
};


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
                data={candidates[vacancy.id]}
                keyExtractor={(item: Candidate) => item.id.toString()}
                showsVerticalScrollIndicator={false} // Hide vertical scrollbar
      showsHorizontalScrollIndicator={false} 
                renderItem={({ item }: { item: Candidate }) => {
                  const backgroundColor = getRandomColor();
                  return (
                    <TouchableOpacity onPress={() => handlePress(item)}>
                      <View style={{ flexDirection: 'row',alignItems:'center', justifyContent: 'space-between', backgroundColor: '#fff', margin: 10, padding: 20, borderRadius: 5,  shadowColor: 'rgba(0, 0, 0, 0.1)', shadowOffset: { width: 0, height: 2 },shadowRadius: 6,elevation: 5,shadowOpacity: 1, }}>
                        <View style={{ backgroundColor, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
                          <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>{item.name.charAt(0).toUpperCase()}</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                          <Text style={{ fontSize: 16, fontWeight: '600' }}>{item.name}</Text>
                          <Text style={{ fontSize: 12, color: getGradeColor(item.grade), padding:10, justifyContent:'center',fontWeight:'bold'}}>{item.grade}%</Text>
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

