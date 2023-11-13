import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import VacancyHeader from '../components/Vacancies/VacancyHeader';
import VacancyItem from '../components/Vacancies/VacancyItem';
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
  // ... (other initial vacancies)
];

const Vacancies: React.FC = () => {
  const [vacanciesData, setVacanciesData] =
    useState<VacancyData[]>(initialVacanciesData);

  const handleAddVacancy = (newVacancy: VacancyData) => {
    setVacanciesData([
      ...vacanciesData,
      { ...newVacancy, vacancy_Id: vacanciesData.length + 1 },
    ]);
  };

  return (
    <View style={styles.container}>
      <VacancyHeader onAddVacancy={handleAddVacancy} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {vacanciesData.map((vacancy) => (
          <VacancyItem key={vacancy.vacancy_Id} vacancy={vacancy} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});

export default Vacancies;
