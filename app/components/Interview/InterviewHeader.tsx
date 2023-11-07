import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

const InterviewHeader = () => {
  return (
    <View style={{ justifyContent: 'center', paddingTop: 54, paddingBottom: 27, paddingHorizontal: 20, backgroundColor: '#1F2F47', borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <Text style={{ color: '#fff', fontSize: 21, fontWeight: '600' }}>Upcoming Interviews</Text>
      <Entypo name="add-to-list" size={24} color="#fff" />
    </View>
  </View>
  
    
  )
}

export default InterviewHeader

const styles = StyleSheet.create({})