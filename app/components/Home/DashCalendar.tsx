import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const DashCalendar = () => {
  return (
    <View>
      <Text>DashCalendar</Text>
      <Agenda />
      
    </View>
  )
}

export default DashCalendar

const styles = StyleSheet.create({
  
})