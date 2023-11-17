import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons'; // Import FontAwesome
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const VacancyHeader = () => {
  const navigation = useNavigation();

  const handleAddVacancyPress = () => {
    navigation.navigate('AddVacancyForm');
  };

  const handleSearchPress = () => {
    // Implement your search functionality here
    // For example, you can navigate to a search screen
    // navigation.navigate('SearchScreen');
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        paddingTop: 54,
        paddingBottom: 27,
        paddingHorizontal: 20,
        backgroundColor: '#00558F',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity onPress={handleSearchPress}>
          <FontAwesome
            name="search"
            size={24}
            color="#fff"
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
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
