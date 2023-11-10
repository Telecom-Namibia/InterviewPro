import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const DashCalendar = () => {
  return (
    <View style={{flex: 1, padding: 10, borderRadius: 20, backgroundColor: 'white', margin:10, height: 'auto'}}>
      <Calendar />
      
    </View>
  )
}

export default DashCalendar

const styles = StyleSheet.create({
  
})