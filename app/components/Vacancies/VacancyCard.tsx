import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VacancyCard = ({ vacancy }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.vacancyId}>Vacancy: {vacancy.vacancy_Id}</Text>
      <Text style={styles.vacancyName}>{vacancy.vacancy_name}</Text>
      <Text style={styles.vacancyDescription}>
        {vacancy.vacancy_description}
      </Text>
      <Text style={styles.vacancyClosingDate}>
        Closing Date: {vacancy.vacancy_closing_date}
      </Text>
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
    backgroundColor: 'lightgrey',
  },
  vacancyId: {
    fontWeight: 'bold',
  },
  vacancyName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  vacancyDescription: {
    marginTop: 5,
  },
  vacancyClosingDate: {
    marginTop: 5,
    color: 'gray',
  },
});

export default VacancyCard;
