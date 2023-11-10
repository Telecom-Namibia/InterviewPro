import { View, Text,StyleSheet, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import InterviewHeader from '../components/Interview/InterviewHeader';
import InterviewCard from '../components/Interview/InterviewCard';


const Interviews = () => {

  
   
  return (
   
    <View>
      <View>
       <InterviewHeader/>
      </View>
      <View>
       <InterviewCard/>
      </View>
      
     
    </View>


  )
}
const styles = StyleSheet.create({

 
  

})
export default Interviews