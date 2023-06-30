import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, FlatList } from 'react-native';
import Header from './components/header';
import ListTool from './components/list';
import Form from './components/Form';
import MainStack from './navigate';
import Main from './pages/Main';

export default function App() {
  
  return (
      <MainStack />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginBottom: '5%',
  }
});
