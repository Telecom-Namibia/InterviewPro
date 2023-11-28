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
    padding: 19,
  },
  position: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 9,
  },
  vacancyDescription: {
    fontSize: 15,
    color: 'gray',
    marginTop: 9,
  },
  closingDate: {
    marginTop: 9,
  },
  keyDetailsContainer: {
    marginTop: 9,
  },
  keyDetailsTitle: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  keyDetailsText: {
    marginTop: 4,
  },
});

export default VacancyDetailScreen;
