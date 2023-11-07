import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Candidates/Header'

const Candidates = () => {
  return (
    <Header />
  )
}

export default Candidates

const styles = StyleSheet.create({
  Container:{
    padding:20,
    marginTop:20,
  }
})