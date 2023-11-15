import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import VacancyHeader from '../components/Vacancies/VacancyHeader';
import VacancyCard from '../components/Vacancies/VacancyCard'; // Assuming you have a VacancyCard component
import { dummy_jobs } from '../../data/dummy_jobs';

const Vacancies = () => {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <VacancyHeader />
      </View>

      <ScrollView contentContainerStyle={styles.card}>
        {dummy_jobs.map((vacancy) => (
          <VacancyCard key={vacancy.vacancy_Id} vacancy={vacancy} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 10,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
});

export default Vacancies;
