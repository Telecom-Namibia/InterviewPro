import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import Header from '../components/Home/Header';
import Cards from '../components/Home/Cards';
import Calendar from '../components/Home/Calendar';




export default class Dashboard extends Component {
  render() {
    return (
      <View>
        <Header/>
        <Cards />
        <Calendar />
       
      </View>
    )
  }
}

const styles = StyleSheet.create({

  
})