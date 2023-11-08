import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Platform } from 'react-native';
import VacancyHeader from '../components/Vacancies/VacancyHeader';
import DateTimePicker from '@react-native-community/datetimepicker';

interface VacancyData {
  vacancy_Id: number;
  vacancy_name: string;
  vacancy_description: string;
  vacancy_closing_date: Date;
}

const initialVacanciesData: VacancyData[] = [
  {
    vacancy_Id: 1,
    vacancy_name: 'Graduates Development',
    vacancy_description: 'We are looking Recent University Graduates join our team.',
    vacancy_closing_date: new Date('2022-01-31'),
  },
  // ... (remaining initial data)
];

const Vacancies: React.FC = () => {
  const [vacanciesData, setVacanciesData] = useState<VacancyData[]>(initialVacanciesData);
  const [newVacancy, setNewVacancy] = useState<VacancyData>({
    vacancy_Id: 0,
    vacancy_name: '',
    vacancy_description: '',
    vacancy_closing_date: new Date(),
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [editingVacancyId, setEditingVacancyId] = useState<number | null>(null);

  const handleAddVacancy = () => {
    if (newVacancy.vacancy_name && newVacancy.vacancy_description && newVacancy.vacancy_closing_date) {
      setVacanciesData([...vacanciesData, { ...newVacancy, vacancy_Id: vacanciesData.length + 1 }]);
      setNewVacancy({
        vacancy_Id: 0,
        vacancy_name: '',
        vacancy_description: '',
        vacancy_closing_date: new Date(),
      });
    }
  };

  const handleEditVacancy = (vacancyId: number) => {
    const editedVacanciesData = vacanciesData.map((vacancy) => {
      if (vacancy.vacancy_Id === vacancyId) {
        return { ...newVacancy, vacancy_Id: vacancyId };
      } else {
        return vacancy;
      }
    });
    setVacanciesData(editedVacanciesData);
    setEditingVacancyId(null);
    setNewVacancy({
      vacancy_Id: 0,
      vacancy_name: '',
      vacancy_description: '',
      vacancy_closing_date: new Date(),
    });
  };

  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || newVacancy.vacancy_closing_date;
    setShowDatePicker(Platform.OS === 'android');
    setNewVacancy({ ...newVacancy, vacancy_closing_date: currentDate });
  };

  const handleEditButtonPress = (vacancy: VacancyData) => {
    setEditingVacancyId(vacancy.vacancy_Id);
    setNewVacancy(vacancy);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <VacancyHeader />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Vacancy Name"
          value={newVacancy.vacancy_name}
          onChangeText={(text) => setNewVacancy({ ...newVacancy, vacancy_name: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Vacancy Description"
          value={newVacancy.vacancy_description}
          onChangeText={(text) => setNewVacancy({ ...newVacancy, vacancy_description: text })}
        />
        <TouchableOpacity style={styles.input} onPress={() => setShowDatePicker(true)}>
          <Text style={styles.datePickerLabel}>Closing Date:</Text>
          <Text>{newVacancy.vacancy_closing_date.toISOString().split('T')[0]}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={newVacancy.vacancy_closing_date}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
        {editingVacancyId ? (
          <TouchableOpacity style={styles.addButton} onPress={() => handleEditVacancy(editingVacancyId)}>
            <Text style={styles.addButtonText}>Save Changes</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.addButton} onPress={handleAddVacancy}>
            <Text style={styles.addButtonText}>Add Vacancy</Text>
          </TouchableOpacity>
        )}
      </View>
      {vacanciesData.map((vacancy) => (
        <View key={vacancy.vacancy_Id} style={styles.vacancyContainer}>
          <Text style={styles.vacancyId}>Vacancy : {vacancy.vacancy_Id}</Text>
          <Text style={styles.vacancyName}>{vacancy.vacancy_name}</Text>
          <Text style={styles.vacancyDescription}>{vacancy.vacancy_description}</Text>
          <Text style={styles.vacancyClosingDate}>
            Closing Date: {vacancy.vacancy_closing_date.toISOString().split('T')[0]}
          </Text>
          <TouchableOpacity style={styles.editButton} onPress={() => handleEditButtonPress(vacancy)}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerContainer: {
    marginBottom: 10,
  },
  formContainer: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  vacancyContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    padding: 15,
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
  datePickerLabel: {
    marginRight: 10,
    fontSize: 16,
  },
  editButton: {
    backgroundColor: 'gray',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Vacancies;
