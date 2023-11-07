import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={{ justifyContent: 'center', paddingTop: 54, paddingBottom: 27, paddingHorizontal: 20, backgroundColor: '#1F2F47', borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
    <View style={{ alignItems: 'flex-start' }}>
      <Text style={{ color: '#fff', fontSize: 21, fontWeight: '600' }}>Hi, Admin</Text>
      <Text style={{ color: 'orange', fontSize: 11, fontWeight: '600' }}>Welcome to InterviewPro</Text>
    </View>
  </View>
  )
}

export default Header

const styles = StyleSheet.create({})