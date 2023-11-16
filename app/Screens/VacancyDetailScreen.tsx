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
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{vacancy.vacancy_name}</Text>
        <Text style={{ fontSize: 16, color: 'gray' }}>{vacancy.vacancy_description}</Text>
        <Text style={{ marginTop: 10 }}>Closing Date: {vacancy.vacancy_closing_date}</Text>
        {/* Add more details as needed */}
      </View>
    </View>
  );
};

export default VacancyDetailScreen;
