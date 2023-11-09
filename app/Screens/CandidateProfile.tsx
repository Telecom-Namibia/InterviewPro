import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ProfileHeader from '../components/Candidates/ProfileHeader';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';

interface Project {
  name: string;
  description: string;
}

interface CandidateProfileProps {
  id: number;
  name: string;
  grade: number;
  email: string;
  phone: string;
  address: string;
  skills: string[];
  experience: string;
  education: string;
  languages: string[];
  certifications: string[];
  projects: Project[];
}

const CandidateProfile = ({ route }: { route: any }) => {
  const { candidate } = route.params;

  const getGradeColor = (grade: number) => {
    if (grade > 80) return 'green';
    if (grade > 50) return 'orange';
    return 'red';
  };

  return (
    <View style={{ flex: 1 }}>
      <ProfileHeader />
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
            {candidate.name.charAt(0).toUpperCase()}
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>{candidate.name}</Text>
          <Text style={{ fontSize: 12, color: getGradeColor(candidate.grade), padding: 10, justifyContent: 'center', fontWeight: 'bold' }}>{candidate.grade}%</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} // Hide vertical scrollbar
      showsHorizontalScrollIndicator={false} >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              borderRadius: 20,
              padding: 20,
              justifyContent: 'center',
              alignItems: 'center',
              width: 110,
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 6,
              elevation: 5,
              shadowOpacity: 1,
            }}
          >
            <Icon name="envelope" size={20} color="#1F2F47" />
            <Text style={{padding:5}}>E-mail</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              borderRadius: 20,
              padding: 20,
              justifyContent: 'center',
              alignItems: 'center',
              width: 110,
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 6,
              elevation: 5,
              shadowOpacity: 1,
            }}
          >
            <Icon name="comment" size={20} color="#1F2F47" />
            <Text style={{padding:5}}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              borderRadius: 20,
              padding: 20,
              justifyContent: 'center',
              alignItems: 'center',
              width: 110,
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 6,
              elevation: 5,
              shadowOpacity: 1,
            }}
          >
            <Icon name="phone" size={20} color="#1F2F47" />
            <Text style={{padding:5}}>Call</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailTitle}>Skills:</Text>
          <Text>{candidate.skills.join(', ')}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailTitle}>Experience:</Text>
          <Text>{candidate.experience}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailTitle}>Education:</Text>
          <Text>{candidate.education}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailTitle}>Languages:</Text>
          <Text>{candidate.languages.join(', ')}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailTitle}>Certifications:</Text>
          <Text>{candidate.certifications.join(', ')}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailTitle}>Projects:</Text>
          {candidate.projects.map((project, index) => (
            <View key={index} style={{ borderBottomWidth: 1, borderBottomColor: 'lightgray', margin: 10, paddingBottom: 10 }}>
              <Text style={{ fontWeight: '500' }}>{project.name}</Text>
              <Text>{project.description}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

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
};

export default CandidateProfile;
