import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import VacancyHeader from '../Vacancies/AddVacanyHeader';

interface VacancyData {
  vacancy_Id: number;
  vacancy_name: string;
  vacancy_description: string;
  vacancy_closing_date: string;
}

interface AddVacancyFormProps {
  // No need for additional props in this simplified example
}

const AddVacancyForm: React.FC<AddVacancyFormProps> = () => {
  const navigation = useNavigation();

  const handleAddVacancy = () => {
    // Perform any necessary logic for adding a vacancy
    // ...

    // Navigate back to the "Vacancies" page after handling the addition
    navigation.goBack();
  };

  return (
    <View>
      {/* Header */}
      <View>
        <VacancyHeader />
      </View>

      {/* Form */}
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Vacancy Name"
          // No value and onChangeText for simplicity in this example
        />
        <TextInput
          style={styles.input}
          placeholder="Vacancy Description"
          // No value and onChangeText for simplicity in this example
        />
        <TextInput
          style={styles.input}
          placeholder="Closing Date"
          // No value and onChangeText for simplicity in this example
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddVacancy}>
          <Text style={styles.addButtonText}>Add Vacancy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: 'orange',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 10,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 5,
    shadowOpacity: 1,
    paddingTop: 20,
  },
});

export default AddVacancyForm;
