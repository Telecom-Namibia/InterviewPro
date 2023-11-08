import React from 'react';
import { View, Text } from 'react-native';

interface CandidateProfileProps {
  name: string;
  email: string;
  phone: string;
  skills: string[];
  experience: string;
}

const CandidateProfile = () => {
  return (
   <View>
    <Text>Candidate Profile</Text>
   </View>
  );
};

export default CandidateProfile;
