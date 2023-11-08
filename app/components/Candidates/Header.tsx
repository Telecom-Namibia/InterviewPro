import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

const Header = () => {
  
  return (
    <View style={{ justifyContent: 'center', paddingTop: 54, paddingBottom: 27, paddingHorizontal: 20, backgroundColor: '#1F2F47', borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontSize: 21, fontWeight: '600' }}>Shortlisted Candidates</Text>
        <TouchableOpacity >
          <FontAwesome5 name={true ? "sort-amount-down" : "sort-amount-up"} size={21} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})