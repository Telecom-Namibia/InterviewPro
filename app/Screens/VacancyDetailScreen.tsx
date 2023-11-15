import React from 'react';
import { View, Text } from 'react-native';
import VacancyHeader from '../components/Vacancies/VacancyHeader';
const VacancyDetailScreen = ({ route }) => {
  // Extract vacancy details from the route
  const { vacancy } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <View>
        <VacancyHeader />
      </View>
      <Text>Vacancy Details Page</Text>
      {/* Display the details of the selected vacancy */}
      <Text>{vacancy.title}</Text>
      <Text>{vacancy.description}</Text>
      {/* Add more details as needed */}
    </View>
  );
};

export default VacancyDetailScreen;
