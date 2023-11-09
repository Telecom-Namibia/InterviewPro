import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import Header from '../components/Home/Header';
import Cards from '../components/Home/Cards';
import DashCalendar from '../components/Home/DashCalendar';




export default class Dashboard extends Component {
  render() {
    return (
      <View>
        <Header/>
        <Cards />
        <DashCalendar />
       
      </View>
    )
  }
}

const styles = StyleSheet.create({

  
})