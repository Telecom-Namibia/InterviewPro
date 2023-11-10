import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DetailsHeader from '../components/Interview/detailsHeader';


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
  }

interface Candidate {
  id: number;
  name: string;
  grade: number;
  email: string;
  phone: string;
}

const InterviewDetails = ({ route }: { route: any }) => {
    const { interview } = route.params;

  return (
    <View>
        <DetailsHeader/>
      <Text>{interview.title}</Text>
    </View>
  )
}

export default InterviewDetails

const styles = StyleSheet.create({})