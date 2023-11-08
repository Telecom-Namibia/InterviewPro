import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text , FlatList, TouchableOpacity} from "react-native";

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

export const CandidatesTabNavigator: React.FC<CandidatesTabsProps> = ({ vacancies, candidates, navigation }) => {
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
                renderItem={({ item }: { item: Candidate }) => (
                  <TouchableOpacity onPress={() => handlePress(item)}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', margin: 10, padding: 20, borderRadius: 5 }}>
                      <Text style={{ color: 'black', fontSize: 14, fontWeight: '600' }}>{item.name}</Text>
                      <View style={{ backgroundColor: getGradeColor(item.grade), padding: 5, borderRadius: 5 }}>
                        <Text style={{ color: '#fff', fontSize: 12, fontWeight: 'bold' }}>{item.grade}%</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            )}
          />
        ))}
      </Tab.Navigator>
  );
};