import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const VacancyHeader = () => {
  return (
    <View style={{ justifyContent: 'center', paddingTop: 54, paddingBottom: 27, paddingHorizontal: 20, backgroundColor: '#1F2F47', borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
    <View style={{ alignItems: 'flex-start' }}>
      <Text style={{ color: '#fff', fontSize: 21, fontWeight: '600' }}>Current Vacancies</Text>
   </View>
  </View>
  )
}

export default VacancyHeader

const styles = StyleSheet.create({})