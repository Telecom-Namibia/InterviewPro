import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';


const Cards = () => {
  return (
    <View>
         <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      <TouchableOpacity style={styles.card}>
        <FontAwesome name="users" size={24} color="#0077B6" />
        <Text style={styles.cardTitle}>Candidates</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <FontAwesome name="briefcase" size={24} color="#FF6B6B" />
        <Text style={styles.cardTitle}>Vacancies</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <FontAwesome name="calendar" size={24} color="#F4A261" />
        <Text style={styles.cardTitle}>Interviews</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <FontAwesome name="file-text" size={24} color="#2A9D8F" />
        <Text style={styles.cardTitle}>Questions</Text>
      </TouchableOpacity>
    </ScrollView>
    </View>
  )
}

export default Cards

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        overflow: 'hidden',
      },
      card: {
        width: 120,
        height: 73,
        backgroundColor: 'white',
        borderRadius: 10,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding:10,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 5,
        shadowOpacity: 1,
      },
      cardTitle: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
      },
})