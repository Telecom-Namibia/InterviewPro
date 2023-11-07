import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Candidates = () => {
  return (
    <View style={styles.Container}> 
      <Text>Candidates</Text>
    </View>
  )
}

export default Candidates

const styles = StyleSheet.create({
  Container:{
    padding:20,
    marginTop:20,
  }
})