import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import VacancyHeader from '../components/Vacancies/VacancyHeader';

interface VacancyData {
  vacancy_Id: number;
  vacancy_name: string;
  vacancy_description: string;
  vacancy_closing_date: string;
}

const initialVacanciesData: VacancyData[] = [
  {
    vacancy_Id: 1,
    vacancy_name: 'Software Engineer',
    vacancy_description:
      'We are looking for a skilled software engineer to join our team.',
    vacancy_closing_date: '2022-01-31',
  },
  {
    vacancy_Id: 2,
    vacancy_name: 'Data Analyst',
    vacancy_description:
      'We are seeking a data analyst to help us analyze and interpret complex data sets.',
    vacancy_closing_date: '2022-02-28',
  },
  {
    vacancy_Id: 3,
    vacancy_name: 'Product Manager',
    vacancy_description:
      'We are looking for an experienced product manager to lead our product development team.',
    vacancy_closing_date: '2022-03-31',
  },
];

const Vacancies: React.FC = () => {
  return (
    <View>
      <View>
        <VacancyHeader />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        {initialVacanciesData.map((vacancy) => (
          <View key={vacancy.vacancy_Id} style={styles.cardContainer}>
            <Text style={styles.vacancyId}>Vacancy: {vacancy.vacancy_Id}</Text>
            <Text style={styles.vacancyName}>{vacancy.vacancy_name}</Text>
            <Text style={styles.vacancyDescription}>
              {vacancy.vacancy_description}
            </Text>
            <Text style={styles.vacancyClosingDate}>
              Closing Date: {vacancy.vacancy_closing_date}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 100,
  },
  cardContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 15,
    backgroundColor: 'lightgrey',
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

export default Vacancies;
