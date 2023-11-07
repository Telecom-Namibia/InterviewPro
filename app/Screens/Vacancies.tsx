import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import VacancyHeader from '../components/Vacancies/VacancyHeader'

const Vacancies = () => {
  return (
    <VacancyHeader />
  )
}
const styles = StyleSheet.create({

  Container:{
    padding:20,
    marginTop:20,
  }
})

export default Vacancies