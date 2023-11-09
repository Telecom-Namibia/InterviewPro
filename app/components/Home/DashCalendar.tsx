import { StyleSheet, Text, View, Modal, Button } from 'react-native';
import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { interviews } from '../../../data/interviews';

const DashCalendar = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const markedDates = interviews.reduce((acc, interview) => {
    acc[interview.interview_date] = { marked: true, dotColor: 'orange' };
    return acc;
  }, {});

  // Get today's date
  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  // Mark today's date
  markedDates[todayStr] = { ...markedDates[todayStr], selected: true, selectedColor: '#1F2F47' };

  const onDayPress = (day) => {
    const dayInterviews = interviews.filter(interview => interview.interview_date === day.dateString);
    setSelectedDay(dayInterviews);
    if (dayInterviews.length > 0) {
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.Container}>
      <Text style={{fontWeight:'bold' ,color:'black'}}>My Schedule</Text>
      <Calendar markedDates={markedDates} onDayPress={onDayPress} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {selectedDay && selectedDay.map(interview => (
              <Text key={interview.id}>{interview.notes}</Text>
            ))}
            <Button onPress={() => setModalVisible(!modalVisible)} title="Close" />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default DashCalendar

const styles = StyleSheet.create({
  Container: {
      backgroundColor: '#fff',
      margin:10,
      padding:10,
      borderRadius: 10,
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      elevation: 5,
      shadowOpacity: 1,
  },
  centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
  },
  modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
  },
  modalText: {
      marginBottom: 15,
      textAlign: "center"
  }
});