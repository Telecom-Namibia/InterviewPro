import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VacancyCard = ({ vacancy }) => {
  const { position, vacancyClosingDate, keyDetails } = vacancy;

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.vacancyId}>Position: {position}</Text>
      {keyDetails && (
        <View style={styles.keyDetailsContainer}>
          <Text style={styles.keyDetailsText}>
            Requirements: {keyDetails.requirements}
          </Text>
          <Text style={styles.vacancyClosingDate}>
            Closing Date: {vacancyClosingDate}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  vacancyId: {
    fontWeight: 'bold',
  },
  vacancyDescription: {
    marginTop: 5,
  },
  vacancyClosingDate: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: 'red',
  },
  keyDetailsContainer: {
    marginTop: 10,
  },
  keyDetailsTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  keyDetailsText: {
    fontWeight: 'bold',
  },
});

export default VacancyCard;
