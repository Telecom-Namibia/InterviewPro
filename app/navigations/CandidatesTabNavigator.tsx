import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text , FlatList, TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { LogBox } from 'react-native';

interface Vacancy {
  id: string;
  title: string;
}

interface Candidate {
  id: number;
  name: string;
  grade: number; // Add this line
}

interface CandidatesTabsProps {
  vacancies: Vacancy[];
  candidates: Record<string, Candidate[]>;
}

const Tab = createMaterialTopTabNavigator();

export const CandidatesTabNavigator: React.FC<CandidatesTabsProps> = ({ vacancies, candidates}) => {
  const getGradeColor = (grade: number) => {
    if (grade > 80) return 'green';
    if (grade > 50) return 'orange';
    return 'red';
  };
  const handlePress = (candidate: Candidate) => {
    console.log(`Candidate ${candidate.name} was pressed`);

    // Add your logic here
  };
  LogBox.ignoreLogs(['Sending `onAnimatedValueUpdate` with no listeners registered.']);
  const getRandomColor = () => {
    const letters = '01234ABCDE';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 10) + 6]; // only use the last 6 letters (darker colors)
    }
    return color;
  };

  return (
    <Tab.Navigator>
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
                renderItem={({ item }: { item: Candidate }) => {
                  const backgroundColor = getRandomColor();
                  return (
                    <TouchableOpacity onPress={() => handlePress(item)}>
                      <View style={{ flexDirection: 'row',alignItems:'center', justifyContent: 'space-between', backgroundColor: '#fff', margin: 10, padding: 20, borderRadius: 5,  shadowColor: 'rgba(0, 0, 0, 0.1)', shadowOffset: { width: 0, height: 2 },shadowRadius: 6,elevation: 5,shadowOpacity: 1, }}>
                        <View style={{ backgroundColor, borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
                          <Text style={{ color: '#fff', fontSize: 20 }}>{item.name.charAt(0).toUpperCase()}</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                          <Text style={{ fontSize: 16, fontWeight: '600' }}>{item.name}</Text>
                          <Text style={{ fontSize: 12, backgroundColor: getGradeColor(item.grade), color: 'white', padding:10, justifyContent:'center',fontWeight:'bold', height:'auto' }}>{item.grade}%</Text>
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

