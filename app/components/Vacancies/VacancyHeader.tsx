import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';

interface Props {
  onPressAddVacancy: () => void;
}

const VacancyHeader: React.FC<Props> = ({ onPressAddVacancy }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <Text style={styles.headerText}>Current Vacancies</Text>
        <TouchableOpacity style={styles.button} onPress={onPressAddVacancy}>
          <Entypo name="add-to-list" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: 54,
    paddingBottom: 27,
    paddingHorizontal: 20,
    backgroundColor: '#1F2F47',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 21,
    fontWeight: '600',
  },
  button: {
    padding: 10,
  },
});

export default VacancyHeader;
