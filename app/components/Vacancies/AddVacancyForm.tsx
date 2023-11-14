import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import VacancyHeader from '../Vacancies/VacancyHeader';
import { ScrollView } from 'react-native-gesture-handler';
import Vacancies from '../../Screens/Vacancies';

interface AddVacancyFormProps {
  onAddVacancy: (newVacancy: VacancyData) => void;
}
const AddVacancyForm: React.FC<AddVacancyFormProps> = ({ onAddVacancy }) => {
  const [newVacancy, setNewVacancy] = useState<VacancyData>({
    vacancy_Id: 0,
    vacancy_name: '',
    vacancy_description: '',
    vacancy_closing_date: '',
  });

  const handleAddVacancy = () => {
    onAddVacancy({ ...newVacancy, vacancy_Id: new Date().getTime() });
    setNewVacancy({
      vacancy_Id: 0,
      vacancy_name: '',
      vacancy_description: '',
      vacancy_closing_date: '',
    });
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Vacancy Name"
        value={newVacancy.vacancy_name}
        onChangeText={(text) =>
          setNewVacancy({ ...newVacancy, vacancy_name: text })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Vacancy Description"
        value={newVacancy.vacancy_description}
        onChangeText={(text) =>
          setNewVacancy({ ...newVacancy, vacancy_description: text })
        }
      />
      <TextInput // AddVacancyForm.tsx
        style={styles.input}
        placeholder="Closing Date"
        value={newVacancy.vacancy_closing_date}
        onChangeText={(text) =>
          setNewVacancy({ ...newVacancy, vacancy_closing_date: text })
        }
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddVacancy}>
        <Text style={styles.addButtonText}>Add Vacancy</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
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
});

export default AddVacancyForm;
