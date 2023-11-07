import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Calendar = () => {
  return (
    <View style={styles.Container}>
      <Text style={{fontWeight:'bold' ,color:'black'}}>My Schedule</Text>
    </View>
  )
}

export default Calendar

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff',
        margin:10,
        padding:10,
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 5,
        shadowOpacity: 1,
        
    }
})