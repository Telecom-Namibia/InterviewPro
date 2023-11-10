import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import DetailsHeader from '../components/Interview/detailsHeader';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

interface Interview {
    id: number;
    title: string;
    dateTime: string;
    interviewers: string[];
    status: string;
    description: string;
    location: string;
    location_url: string;
    interview_type: string;
    duration: number;
    reschedule_reason: string;
    reschedule_date: string | null;
    rejection_reasons: string;
    follow_up_actions: string;
    interviewer_notes: string;
    schedule: Candidate[];
    questionnaire: Question[];
  }

interface Question {
    question: string;
    answers: string[];
  }
  

interface Candidate {
  id: number;
  name: string;
  grade: number;
  email: string;
  phone: string;

}


   

const InterviewDetails = ({ route }: { route: any }) => {

    const navigation = useNavigation();

    const { interview } = route.params;
    const schedule = (interview: Interview) => {
        navigation.navigate('Interview Schedule', { interview });
    
      };
    const questionnaire = (interview: Interview) => {
        navigation.navigate('Interview Questionnaire', { interview });
    
      };

  return (
    <View style={{ flex: 1 }}>
        <DetailsHeader/>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        margin: 10,
        padding: 20,
        borderRadius: 20,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 5,
        shadowOpacity: 1,
      }}
    >
      <View
        style={{
          backgroundColor: 'black',
          borderRadius: 50,
          width: 40,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 10,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>
          {interview.title.charAt(0).toUpperCase()}
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 16, fontWeight: '600' }}>{interview.title}</Text>
        <Text style={{ fontSize: 11, fontWeight: '400', }}>{interview.description}</Text>

      </View>
    </View>
    <ScrollView showsVerticalScrollIndicator={false} // Hide vertical scrollbar
    showsHorizontalScrollIndicator={false} >
      <View style={{ flexDirection: 'row', justifyContent: 'space-around',margin:10, alignItems: 'center' }}>
        <TouchableOpacity
        onPress={() => questionnaire(interview)}
          style={{
            height:100,
            backgroundColor: '#fff',
            borderRadius: 20,
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center',
            width: '40%',
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 6,
            elevation: 5,
            shadowOpacity: 1,
            
          }}
        >
        <FontAwesome name="file-text" size={24} color="#1F2F47" />
          <Text style={{padding:5}}>Questionaire</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => schedule(interview)}
          style={{
            height:100,

            backgroundColor: '#fff',
            borderRadius: 20,
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center',
            width: '40%',
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 6,
            elevation: 5,
            shadowOpacity: 1,
          }}
        >
          <Icon name="list" size={20} color="#1F2F47" />
          <Text style={{padding:5}}>Schedule</Text>
        </TouchableOpacity>
       
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailTitle}>Date:</Text>
        <Text>{format(new Date(interview.dateTime), 'dd MMM yyyy')}</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.detailTitle}>Interview Panel:</Text>
        <Text>{interview.interviewers.join(', ')}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailTitle}>Interview Location:</Text>
        <Text>{interview.location}</Text>
      </View>
      
    </ScrollView>
  </View>
  )
}

export default InterviewDetails

const styles = {
    detailContainer: {
      padding: 20,
      backgroundColor: '#fff',
      borderRadius: 20,
      margin: 10,
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      elevation: 5,
      shadowOpacity: 1,
    },
    detailTitle: {
      fontWeight: '500',
      margin: 3,
      fontSize: 14,
      color: '#1F2F47',
    },
    detailSection: {
      marginBottom: 20,
    },
}