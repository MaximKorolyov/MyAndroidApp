import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Container, View, SafeAreaView, Button, Alert } from 'react-native';
import { createDB,selectConfidence,insertIntoConfidence, CheckExistDB } from '../DB/menegment';
import { Configuration } from '../DB/config';
import * as SQlite from 'expo-sqlite'
import { useEffect, useState } from 'react';

export default function Main( {navigation} ) {
  const [names, setNames] = useState([]);
  const loadSceneTasks = () => {
    navigation.navigate('Tasks')
  }

  
  // function selectConfidence(dbName){
  //       const db = SQlite.openDatabase(dbName);
  //       db.transaction(tx => {
  //           tx.executeSql(`SELECT * FROM confidence`), null,
  //           (txObj, resultSet) => setNames(resultSet.rows._array)
  //           })
  //       }
        
  // console.log(names);

  return (
     <View style={styles.main}>
      
        <Button title='Моя машина' style={styles.button}/>
        <Button title='Я уверен' onPress={loadSceneTasks} style={styles.button}/>

        {/* <Button onPress={() => createDB('dementi.sqlite')} title='create'/>
        <Button onPress={() => insertIntoConfidence('dementi.sqlite')} title='insert'/>
        <Button onPress={() => selectConfidence('dementi.sqlite')} title='select'/>
        <Button onPress={() => CheckExistDB('dementi.sqlite')} title='CheckExistDB'/> */}
     </View>

  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 100,
    width: '80%',
    paddingTop: 50,
  },
  main: {
    paddingTop: 50,
    height: 100,

    
  },
});