import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import VacancyHeader from '../components/Vacancies/VacancyHeader';
import VacancyCard from '../components/Vacancies/VacancyCard';
import { dummy_jobs } from '../../data/dummy_jobs';
import VacancyDetailScreen from './VacancyDetailScreen';

const Vacancies = () => {
  const navigation = useNavigation();

  const handleVacancyPress = (vacancy) => {
    navigation.navigate('VacancyDetail', { vacancy });
  };

  return (
    <View style={{ flex: 1 }}>
      <View>
        <VacancyHeader />
      </View>

      <ScrollView contentContainerStyle={styles.card}>
        {dummy_jobs.map((vacancy) => (
          <TouchableOpacity
            key={vacancy.vacancy_Id}
            onPress={() => handleVacancyPress(vacancy)}
          >
            <VacancyCard vacancy={vacancy} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'orange',
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
