// VacancyHeader.tsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const VacancyHeader = () => {
  const navigation = useNavigation();

  const handleAddVacancyPress = () => {
    navigation.navigate('AddVacancyForm');
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        paddingTop: 54,
        paddingBottom: 27,
        paddingHorizontal: 20,
        backgroundColor: '#1F2F47',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#fff', fontSize: 21, fontWeight: '600' }}>
          Current Vacancies
        </Text>
        <TouchableOpacity onPress={handleAddVacancyPress}>
          <Entypo name="add-to-list" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VacancyHeader;

const styles = StyleSheet.create({});
