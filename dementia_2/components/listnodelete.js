import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight,TouchableOpacity} from 'react-native';

export default function ListToolNoDel({ el }) {
  
  return (
     <TouchableHighlight>
        <Text style={styles.text}>{el.text}</Text>
     </TouchableHighlight>


  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    textAlign: 'center',
    borderRadius: 5,
    borderColor: '#87CEEB',
    // color: '#F0F8FF',
    borderWidth: 1,
    marginTop: 20,
    width: '70%',
    marginLeft: '15%'
  }
});