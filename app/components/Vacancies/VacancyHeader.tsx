import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

interface Props {
  onPressAddVacancy: () => void;
}

const VacancyHeader = ({ onPressAddVacancy }: Props) => {
  return (
    <View style={{ justifyContent: 'center', paddingTop: 54, paddingBottom: 27, paddingHorizontal: 20, backgroundColor: '#1F2F47', borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontSize: 21, fontWeight: '600' }}>Current Vacancies</Text>
        <TouchableOpacity onPress={onPressAddVacancy}>
          <Text style={{ color: '#fff', fontSize: 16 }}>Add </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default VacancyHeader

const styles = StyleSheet.create({})