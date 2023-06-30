import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, FlatList } from 'react-native';
import Header from '../components/header';
import Form from '../components/Form';
import ListToolNoDel from '../components/listnodelete';

export default function Tasks( {navigation} ) {
  const [ListOfItems, setListOfItems] = useState([
    {text: 'Дверь закрыта', key: '1'},
    {text: 'Утюг выключен', key: '2'},
    {text: 'Газ перекрыт', key: '3'},
    {text: 'Кот накормлен', key: '4'}
  ]);
  const loadSceneEdit = () => {
    navigation.navigate('Edit')
  }




  return (
    
      <View >
         <Header />
         <Button title='Редактировать' onPress={loadSceneEdit}/>
         <View>
          <FlatList data={ListOfItems} renderItem={({ item }) =>(
            <ListToolNoDel el={item}/>
            
          )}/>
         </View>
      </View>
    
  );
}
