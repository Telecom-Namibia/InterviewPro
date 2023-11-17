import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import VacancyHeader from '../components/Vacancies/VacancyDetailsHeader';

const VacancyDetailScreen = ({ route }) => {
  // Extract vacancy details from the route
  const { vacancy } = route.params;
  const { position, vacancyDescription, vacancyClosingDate, keyDetails } =
    vacancy;

  return (
    <View style={{ flex: 1 }}>
      <View>
        <VacancyHeader />
      </View>
      <View style={styles.container}>
        <Text style={styles.position}>{position}</Text>
        <Text style={styles.vacancyDescription}>{vacancyDescription}</Text>
        <Text style={styles.closingDate}>
          Closing Date: {vacancyClosingDate}
        </Text>
        {keyDetails && (
          <View style={styles.keyDetailsContainer}>
            <Text style={styles.keyDetailsTitle}>Key Details:</Text>
            <Text style={styles.keyDetailsText}>
              Vacancy Name: {keyDetails.vacancyName}
            </Text>
            <Text style={styles.keyDetailsText}>
              Requirements: {keyDetails.requirements}
            </Text>
          </View>
        )}
        {/* Add more details as needed */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  position: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  vacancyDescription: {
    fontSize: 16,
    color: 'gray',
    marginTop: 10,
  },
  closingDate: {
    marginTop: 10,
  },
  keyDetailsContainer: {
    marginTop: 10,
  },
  keyDetailsTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  keyDetailsText: {
    marginTop: 5,
  },
});

export default VacancyDetailScreen;
