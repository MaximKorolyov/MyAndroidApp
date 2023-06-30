import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function Form({addHandler}) {
    const [text, setValue]=useState('');

    const onChange = (text) => {
        setValue(text);
    };


  return (
     <View>
        <TextInput style={styles.input} onChangeText={onChange} placeholder='Добавить уверенность' />
        <Button style={styles.button} color='green' onPress={() => addHandler(text)} title='Добавить'></Button>
     </View>


  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    padding: 10,
    marginVertical: 30,
    marginHorizontal: '20%',
    width: '60%'
  },
  button: {
    width: '30%'
  }
});