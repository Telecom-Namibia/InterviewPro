import { View, Text,StyleSheet, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import InterviewHeader from '../components/Interview/InterviewHeader';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Interviews = () => {
  function formatDateToWords(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  }
  const data = [
    {
      "id": 1,
      "application_id": 101,
      "interview_date": "2023-10-15",
      "interview_location": "123 Main Street, City",
      "notes": "First round interview with candidate A.",
      "questionnaire_prepared": true
    },
    {
      "id": 2,
      "application_id": 102,
      "interview_date": "2023-10-18",
      "interview_location": "456 Elm Avenue, Town",
      "notes": "Video interview with candidate B.",
      "questionnaire_prepared": false
    },
    {
      "id": 3,
      "application_id": 103,
      "interview_date": "2023-10-20",
      "interview_location": "789 Oak Lane, Village",
      "notes": "In-person interview with candidate C.",
      "questionnaire_prepared": true
    },
    {
      "id": 4,
      "application_id": 104,
      "interview_date": "2023-10-22",
      "interview_location": "101 Park Avenue, City",
      "notes": "Technical interview with candidate D.",
      "questionnaire_prepared": false
    },
    {
      "id": 5,
      "application_id": 105,
      "interview_date": "2023-10-25",
      "interview_location": "202 Lake Road, Town",
      "notes": "Phone interview with candidate E.",
      "questionnaire_prepared": true
    },
    {
      "id": 6,
      "application_id": 106,
      "interview_date": "2023-10-28",
      "interview_location": "303 Forest Lane, Village",
      "notes": "Final round interview with candidate F.",
      "questionnaire_prepared": false
    },
    {
      "id": 7,
      "application_id": 107,
      "interview_date": "2023-11-02",
      "interview_location": "404 Grove Street, City",
      "notes": "Behavioral interview with candidate G.",
      "questionnaire_prepared": true
    },
    {
      "id": 8,
      "application_id": 108,
      "interview_date": "2023-11-05",
      "interview_location": "505 Pine Avenue, Town",
      "notes": "Panel interview with candidate H.",
      "questionnaire_prepared": false
    },
    {
      "id": 9,
      "application_id": 109,
      "interview_date": "2023-11-08",
      "interview_location": "606 Birch Lane, Village",
      "notes": "Technical assessment and interview with candidate I.",
      "questionnaire_prepared": true
    },
    {
      "id": 10,
      "application_id": 110,
      "interview_date": "2023-11-11",
      "interview_location": "707 Cedar Road, City",
      "notes": "In-person interview with candidate J.",
      "questionnaire_prepared": false
    },
    {
      "id": 11,
      "application_id": 111,
      "interview_date": "2023-11-14",
      "interview_location": "808 Maple Street, Town",
      "notes": "HR interview with candidate K.",
      "questionnaire_prepared": true
    },
    {
      "id": 12,
      "application_id": 112,
      "interview_date": "2023-11-17",
      "interview_location": "909 Spruce Avenue, Village",
      "notes": "Technical assessment and interview with candidate L.",
      "questionnaire_prepared": false
    },
    {
      "id": 13,
      "application_id": 113,
      "interview_date": "2023-11-20",
      "interview_location": "1010 Oak Lane, City",
      "notes": "Final round interview with candidate M.",
      "questionnaire_prepared": true
    }
];

   
  
  return (
   



    <View>
      <View>
       <InterviewHeader/>
      </View>
      <SafeAreaView style={styles.Container}>
      <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false} // Hide vertical scrollbar
      showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
      renderItem={({item}) => {
        return(
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
        )
      }}
      />
      </SafeAreaView>
     
    </View>


  )
}
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
export default Interviews