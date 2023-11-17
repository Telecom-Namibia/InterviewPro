import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { format } from 'date-fns';

const InterviewScheduleHeader = ({ details }) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        paddingTop: 54,
        paddingBottom: 27,
        paddingHorizontal: 20,
        backgroundColor: '#00558F',
      }}
    >
      <View style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontSize: 21, fontWeight: '600' }}>
          {details.title}
        </Text>

        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
          {format(new Date(details.dateTime), 'dd MMM yyyy')}
        </Text>
      </View>
    </View>
  );
};

export default InterviewScheduleHeader;

const styles = StyleSheet.create({});
