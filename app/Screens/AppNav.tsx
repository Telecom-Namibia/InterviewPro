import { View, Text, ActivityIndicator, SafeAreaView } from 'react-native'
import React, { useContext } from 'react'

import { AuthContext } from '../contexts/AuthContext';
import Dashboard from './Dashboard';
import Login from './Login';

function AppNav () {
return (
    <SafeAreaView>
        <Login/>
    </SafeAreaView>
  
 
)
}

export default AppNav