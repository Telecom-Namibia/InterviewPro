import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

const VacancyHeader = ({ onAddVacancy }) => {
  const [showForm, setShowForm] = useState(false);
  const [newVacancy, setNewVacancy] = useState({
    vacancy_name: '',
    vacancy_description: '',
    vacancy_closing_date: '',
  });

  const handleAddVacancy = () => {
    onAddVacancy(newVacancy);
    setShowForm(false);
    setNewVacancy({
      vacancy_name: '',
      vacancy_description: '',
      vacancy_closing_date: '',
    });
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        paddingTop: 54,
        paddingBottom: 27,
        paddingHorizontal: 20,
        backgroundColor: '#1F2F47',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
      }}
    >
      <View style={{ alignItems: 'flex-start' }}>
        <Text style={{ color: '#fff', fontSize: 21, fontWeight: '600' }}>
          Current Vacancies
        </Text>
        {showForm ? (
          <View>
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
            <TextInput
              style={styles.input}
              placeholder="Closing Date"
              value={newVacancy.vacancy_closing_date}
              onChangeText={(text) =>
                setNewVacancy({ ...newVacancy, vacancy_closing_date: text })
              }
            />
            <TouchableOpacity
              style={styles.addButton}
              onPress={handleAddVacancy}
            >
              <Text style={styles.addButtonText}>Add Vacancy</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={() => setShowForm(true)}>
            <Entypo name="add-to-list" size={24} color="#fff" />
          </TouchableOpacity>
        )}
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
    color: '#fff',
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default VacancyHeader;
