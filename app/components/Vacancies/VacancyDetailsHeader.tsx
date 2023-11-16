import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const VacancyDetailScreen = () => {
  const navigation = useNavigation();

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
        <Text
          style={{
            color: '#fff',
            fontSize: 21,
            fontWeight: '600',
            alignItems: 'center',
          }}
        >
          Current Vacancies
        </Text>
      </View>
    </View>
  );
};

export default VacancyDetailScreen;

const styles = StyleSheet.create({});
