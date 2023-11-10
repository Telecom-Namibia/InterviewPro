import { StyleSheet, View } from 'react-native'
import React from 'react'
import Header from '../components/Candidates/Header'
import { CandidatesTabNavigator } from '../navigations/CandidatesTabNavigator';
import { vacancies } from '../../data/vacancies';

const Candidates = () => {
 
  return (
    <View style={{ flex: 1 }}>
      <Header />      
      <CandidatesTabNavigator vacancies={vacancies}/>
    </View>
  );
  
}

export default Candidates

const styles = StyleSheet.create({
  Container:{
    padding:20,
    marginTop:50,
  }
})