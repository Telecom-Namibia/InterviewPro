import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
const VacancyHeader = () => {
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
        <TouchableOpacity>
          <Entypo name="add-to-list" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VacancyHeader;

const styles = StyleSheet.create({});
