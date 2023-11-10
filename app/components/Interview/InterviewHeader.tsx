import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const InterviewHeader = () => {
  return (
    <View style={{ justifyContent: 'center', paddingTop: 54, paddingBottom: 27, paddingHorizontal: 20, backgroundColor: '#1F2F47',}}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <Text style={{ color: '#fff', fontSize: 21, fontWeight: '600' }}>Upcoming Interviews</Text>
      <TouchableOpacity>
      <Entypo name="add-to-list" size={24} color="#fff" />

      </TouchableOpacity>
    </View>
  </View>
  
    
  )
}

export default InterviewHeader

const styles = StyleSheet.create({})