import React, { useState, createContext, useEffect } from 'react'; //------------------MAIN
import { StyleSheet, TouchableOpacity, View, Text, FlatList, Modal, TextInput, ScrollView } from 'react-native';
import * as SQLite from 'expo-sqlite'; 
import Header from '../components/header';
import { DelItem, addItem, createTable } from '../database/database';





export default function Main({navigation}) {

const [CarList, SetCarList] = useState([]);
const [modalActive, SetModalActive] = useState(false);
const [carname, setCarname] = useState('');

useEffect(() => {
  getItems()
},[]) 

const getItems = () => {

  
  const db = SQLite.openDatabase('database.db'); // Бесконечный Вызов, пофиксить
  
  let car_list = []
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM Cars;',
      [],
      (_, {rows}) => {
          // console.log('Получены элементы:', rows._array);
          // console.log('Количество элементов', rows.length);
        for(let i = 0; i < rows.length; i++){
          //  console.log('раз')
            // console.log(rows._array[i])
          let cars = {}
          cars.title = rows._array[i].carname
          cars.index = String(rows._array[i].id)
          car_list[i] = cars
        }
        SetCarList(car_list)
      },
      (_, error) => {
        console.log('Ошибка получения элементов:', error);
      }
    );
  });
  
};

 
  

const active = () => {
  SetModalActive(true);
  console.log(modalActive)

}

const close = () => {
  SetModalActive(false)
}

const addCar = (carname) => {
  addItem(carname);
  getItems();
  close();
}
// const addCar = (carname) => {
//   addItem(carname);
//   close();
// }

const GoToProfile = (ItemId, CarName) => {

    navigation.replace('prof')
    navigation.navigate('prof', {id : ItemId, carname : CarName})
}


  
  return (
    // <ScrollView>
    <View style={styles.main}>

      <Modal visible={modalActive}>
      <View style={styles.main}>
          <Header />
            <Text style={styles.text2}> Внесите название вашего авто </Text>
            <TextInput style={styles.textinput} onChangeText={setCarname}></TextInput>
            <View style={styles.row}>
              <TouchableOpacity style={styles.buttonBlock} onPress={() => addCar(carname)}>
                      <Text style={styles.textbutton}>Добавить</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonBlock} onPress={() => close()}>
                      <Text style={styles.textbutton}>Отмена</Text>
              </TouchableOpacity>
            </View>
        </View>
        </Modal>
       <Header />
       
       <View>
            <FlatList data={CarList} renderItem={({item}) => (
              <TouchableOpacity onPress={() => GoToProfile(item.index, item.title)}>
                <Text style={styles.text}>{item.title}</Text>
               
              </TouchableOpacity>
            )}
            
            />
       </View>
        <View style={styles.body}>
            <TouchableOpacity style={styles.buttonCircle} onPress={() => active()}>
                <Text style={styles.plus}>+</Text>
            </TouchableOpacity>

        </View>
       

    </View>
    // </ScrollView> 
      
  );
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'darkslateblue',
    },
    text: {
        padding: 20,
        fontSize: 18,
        // color: 'white',
        textAlign: 'center',
        borderRadius: 10,
        borderWidth: 2,
        marginTop: 20,
        width: '70%',
        marginLeft: '15%',
        backgroundColor: '#876ED7',
        
    },
    buttonCircle: {
        alignItems: 'center',
        backgroundColor: '#876ED7',
        padding: 6,
        height: 70,
        width: 70,
        borderRadius: 50
    },
    plus: {
        fontSize: 40
    },
    body: {
        alignItems: 'center',
        paddingTop: 40,
    },
    textinput: {
      backgroundColor: 'white',
      margin: 25,
      height: 35,
      paddingLeft: 20,
      fontSize: 18,
      borderRadius: 40,
    },
    textbutton: {
      fontSize: 18,
      color: 'white'
    },
    buttonBlock: {
      alignItems: 'center',
        backgroundColor: '#876ED7',
        padding: 6,
        height: 40,
        width: 170,
        borderRadius: 50,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginRight: 20,
      marginLeft: 20

    },
    text2: {
      fontSize: 20,
      color: 'white',
      textAlign: 'center',
      marginTop: 50
    },
});

