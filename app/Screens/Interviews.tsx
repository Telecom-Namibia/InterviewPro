import { View, Text,StyleSheet, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import InterviewHeader from '../components/Interview/InterviewHeader';
import InterviewCard from '../components/Interview/InterviewCard';
import { vacancies } from '../../data/vacancies';
import { InterviewTabNavigator } from '../navigations/InterviewTabNavigator';


const Interviews = () => {

  
   
  return (
   
    <View style={{flex:1}}>
      <View>
       <InterviewHeader/>
      </View>
      
      <InterviewTabNavigator vacancies={vacancies} />
      
      
     
    </View>


  )
}
const styles = StyleSheet.create({

 
  

})
export default Interviews