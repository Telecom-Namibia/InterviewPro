import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SettingsHeader = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        paddingTop: 54,
        paddingBottom: 27,
        paddingHorizontal: 20,
        backgroundColor: '#00558F',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
      }}
    >
      <View style={{ alignItems: 'flex-start' }}>
        <Text style={{ color: '#fff', fontSize: 21, fontWeight: '600' }}>
          More Settings
        </Text>
      </View>
    </View>
  );
};

export default SettingsHeader;

const styles = StyleSheet.create({});
