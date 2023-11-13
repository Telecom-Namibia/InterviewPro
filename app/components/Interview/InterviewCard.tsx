import { StyleSheet, Text, View,SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { interviews } from '../../../data/interviews';
import { TouchableOpacity } from 'react-native-gesture-handler';

const data = interviews;

const InterviewCard = () => {
    function formatDateToWords(dateString) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
      }
  return (
    <SafeAreaView style={styles.Container}>
        <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false} // Hide vertical scrollbar
      showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
      renderItem={({item}) => {
        return(
            <TouchableOpacity>

          <View style={styles.card}>
              <Text style={styles.cardText}>{formatDateToWords(item.interview_date)}</Text>
              <View style={styles.locationContainer}>
              <Entypo name="location-pin" size={24} color="gray" />
                <Text style={{fontSize: 14, fontWeight:'700', color:'gray'}}>{item.interview_location}</Text>
              </View>
              <View style={[styles.statusButton, {backgroundColor: item.questionnaire_prepared ? '#2A9D8F' : '#FF6B6B', margin:10}]}>
                <Text style={styles.statusText}>
                  {item.questionnaire_prepared ? 'Prepared' : 'Not Prepared'}
                </Text>
              </View>
            </View>
            </TouchableOpacity>

        )
      }}
      />
     
      </SafeAreaView>
  )
}

export default InterviewCard

const styles = StyleSheet.create({

    Container:{
        margin:10,
        padding:10,
      },
      card: {
      
        margin: 10,
        paddingHorizontal: 'auto',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        width: 'auto',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 5,
        shadowOpacity: 1,
      },
      cardText: {
        justifyContent: 'flex-start',
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 10,
        textAlign: 'left',
      },
      statusButton: {
        justifyContent: 'flex-end',
        backgroundColor: '#3498db', // Change to your desired button color
        padding: 5,
        borderRadius: 5,
      },
      statusText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
      },
    
    locationContainer: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
      alignItems: 'center',
    },
      
})