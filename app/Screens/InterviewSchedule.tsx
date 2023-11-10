import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import InterviewScheduleHeader from '../components/Interview/InterviewScheduleHeader';

const InterviewSchedule = ({ route }: { route: any }) => {
    const { interview } = route.params;

  return (
    <View style={{flex:1}}>
        <InterviewScheduleHeader details={interview}/>
        <FlatList
                data={interview.schedule}
                keyExtractor={(item: Schedule) => item.id.toString()}
                showsVerticalScrollIndicator={false} // Hide vertical scrollbar
      showsHorizontalScrollIndicator={false} 
                renderItem={({ item }: { item: Schedule }) => {
                  return (
                    <TouchableOpacity onPress={() => console.log(item.name,'was pressed')}>
                      <View style={{ flexDirection: 'row',alignItems:'center', justifyContent: 'space-between', backgroundColor: '#fff', margin: 10, padding: 20, borderRadius: 5,  shadowColor: 'rgba(0, 0, 0, 0.1)', shadowOffset: { width: 0, height: 2 },shadowRadius: 6,elevation: 5,shadowOpacity: 1, }}>
                        <View style={{ backgroundColor: 'black', borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
                          <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>{item.name.charAt(0).toUpperCase()}</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                          <Text style={{ fontSize: 16, fontWeight: '600' }}>{item.name}</Text>
                          <Text style={{ fontSize: 16, fontWeight: 'bold' , color: '#157F63'}}>{item.time}</Text>

                          </View>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
    </View>
  )
}

export default InterviewSchedule

const styles = StyleSheet.create({})