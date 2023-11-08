import { StyleSheet, View } from 'react-native'
import React from 'react'
import Header from '../components/Candidates/Header'
import { CandidatesTabNavigator }  from '../navigations/CandidatesTabNavigator';
import { vacancies, candidates } from '../../data/vacancies';

const Candidates = () => {
 
  
  interface CandidatesTabsProps {
    vacancies: {
      id: string;
      title: string;
    }[];
    candidates: Record<string, {
      id: string;
      name: string;
    }[]>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <CandidatesTabNavigator vacancies={vacancies} candidates={candidates} />
    </View>
  )
}

export default Candidates

const styles = StyleSheet.create({
  Container:{
    padding:20,
    marginTop:50,
  }
})