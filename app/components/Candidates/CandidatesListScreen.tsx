import React from 'react';
import { View, Text } from 'react-native';

const CandidateListScreen = ({ candidates, vacancyTitle }) => {
  return (
    <View>
      <Text>{vacancyTitle}</Text>
      {candidates.map((candidate) => (
        <Text key={candidate.id}>{candidate.name}</Text>
      ))}
    </View>
  )
}

export default CandidateListScreen;
