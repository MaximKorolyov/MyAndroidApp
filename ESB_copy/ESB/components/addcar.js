import React, { useState } from 'react'; //------------------ADDCAR
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { DelItem, addItem, createTable } from '../database/database';

export default function AddCar() {
    const [carname, setCarname] = useState('')
    const onChange = (carname) => {
        setCarname(carname);
    };
    // createTable();



  return (
    <View style={styles.main}>
      <Text style={styles.text}>Внесите название вашего авто</Text>

      <TextInput style={styles.textinput} onChangeText={onChange}></TextInput>

      <Button style={styles.button} onPress={() => addItem(carname)} title='Добавить'>Добавить</Button>
      <Button style={styles.button} onPress={() => DelItem()} title='Удалить'>Удалить</Button>
    </View>
  );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 30,
        height: 300,
        backgroundColor: 'slateblue'
    },
    text: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    },
    textinput: {
        backgroundColor: 'white',
        margin: 25,
        height: 30
    },
    button: { 
        backgroundColor: 'blue',
        padding: 5, // уменьшите это значение для уменьшения размера кнопки
        borderRadius: 5,
    }
});