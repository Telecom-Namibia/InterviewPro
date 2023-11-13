import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface VacancyItemProps {
  vacancy: {
    vacancy_Id: number;
    vacancy_name: string;
    vacancy_description: string;
    vacancy_closing_date: string;
  };
}

const VacancyItem: React.FC<VacancyItemProps> = ({ vacancy }) => {
  return (
    <View style={styles.vacancyContainer}>
      <Text style={styles.vacancyId}>ID: {vacancy.vacancy_Id}</Text>
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
  vacancyContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 5,
  },
  vacancyId: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  vacancyName: {
    fontSize: 16,
    marginTop: 5,
  },
  vacancyDescription: {
    fontSize: 14,
    marginTop: 5,
    color: '#555',
  },
  vacancyClosingDate: {
    fontSize: 14,
    marginTop: 5,
    color: '#888',
  },
});

export default VacancyItem;
