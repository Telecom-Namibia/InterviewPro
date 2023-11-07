import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import Header from '../components/Home/Header';
import Cards from '../components/Home/Cards';




export default class Dashboard extends Component {
  render() {
    return (
      <View>
        <Header/>
        <Cards />
       
      </View>
    )
  }
}

const styles = StyleSheet.create({

  
})