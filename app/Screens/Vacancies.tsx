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

      <ScrollView contentContainerStyle={styles.container}>
        {dummy_jobs.map((vacancy) => (
          <VacancyCard key={vacancy.vacancy_Id} vacancy={vacancy} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },
});

export default Vacancies;
