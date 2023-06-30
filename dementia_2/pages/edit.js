import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, FlatList } from 'react-native';
import Header from '../components/header';
import ListTool from '../components/list';
import Form from '../components/Form';

export default function Edit() {
  const [ListOfItems, setListOfItems] = useState([
    {text: 'Дверь закрыта', key: '1'},
    {text: 'Утюг выключен', key: '2'},
    {text: 'Газ перекрыт', key: '3'},
    {text: 'Кот накормлен', key: '4'}
  ]);
  
  const addHandler = (text) => {
    setListOfItems((list) => {
      return[
        { text: text, key: Math.random().toString(36).substring(7) },
        ...list
      ]
    })
  };

  const deleteHandler = (key) => Alert.alert('Удаление', 'Вы уверенны, что хотите удалить объект?', [
    {text: 'Да', onPress: () => setListOfItems((list) => {
      return list.filter(ListOfItems => ListOfItems.key !=key)
    })},
    {text: 'Передумал'} 
  ])

  // const deleteHandler = (key) => {
  //   setListOfItems((list) => {
  //     return list.filter(ListOfItems => ListOfItems.key !=key)
  //   });
  // }


  return (
    
      <View >
         <Header />
         <Form addHandler={addHandler} />
         <View>
          <FlatList data={ListOfItems} renderItem={({ item }) =>(
            <ListTool el={item} deleteHandler={deleteHandler}/>
            
          )}/>
         </View>
      </View>
    
  );
}
