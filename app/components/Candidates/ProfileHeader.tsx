<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileHeader = () => {
  return (
    <View style={{ justifyContent: 'center', paddingTop: 54, paddingBottom: 27, paddingHorizontal: 20, backgroundColor: '#1F2F47', borderBottomRightRadius: 0, borderBottomLeftRadius: 0}}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
=======
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'



const ProfileHeader = () => {

  return (
    <View style={{ justifyContent: 'center', paddingTop: 54, paddingBottom: 27, paddingHorizontal: 20, backgroundColor: '#1F2F47', borderBottomRightRadius: 0, borderBottomLeftRadius: 0}}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      
>>>>>>> origin/main
        <Text style={{ color: '#fff', fontSize: 21, fontWeight: '600' }}>Candidate Profile</Text>
        
      </View>
    </View>
  )
}

export default ProfileHeader

const styles = StyleSheet.create({})