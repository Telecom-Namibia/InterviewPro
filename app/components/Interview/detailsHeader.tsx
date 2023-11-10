import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DetailsHeader = () => {
  return (
    <View style={{ justifyContent: 'center', paddingTop: 54, paddingBottom: 27, paddingHorizontal: 20, backgroundColor: '#1F2F47',}}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <Text style={{ color: '#fff', fontSize: 21, fontWeight: '600' }}>Interview Details</Text>
     
    </View>
  </View>
  
    
  )
}

export default DetailsHeader

const styles = StyleSheet.create({})