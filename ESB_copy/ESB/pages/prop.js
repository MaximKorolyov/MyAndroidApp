import React, { useEffect, useState } from 'react'; //------------------PROFILE
import { StyleSheet, TouchableOpacity, View, Text, FlatList, ScrollView } from 'react-native';
import * as SQLite from 'expo-sqlite'; 
import Header_Prop from '../components/prop/header';
import {useIsFocused } from '@react-navigation/native';



export default function Prop({navigation, route}) {
    
   
    const {car_id} = route.params
    const {prop_name} = route.params
    const {prop_id} = route.params
    const [PropList, SetPropList] = useState([])

  
   


    function getItems(car_id, prop_id){

  
        const db = SQLite.openDatabase('database.db'); // Бесконечный Вызов, пофиксить
        
        let props_list = []
        db.transaction((tx) => {
          tx.executeSql(
            'SELECT * FROM Status where cars_id = (?) AND prop_id = (?);',
            [car_id, prop_id],
            (_, {rows}) => {
                
              for(let i = 0; i < rows.length; i++){
                //  console.log('раз')
                  // console.log(rows._array[i])
                let props = {}
                props.title = rows._array[i].sname
                props.index = String(rows._array[i].idstatus)
                props.text = rows._array[i].stext
                props_list[i] = props
              }
              SetPropList(props_list)
            },
            (_, error) => {
              console.log('Ошибка получения элементов:', error);
            }
          );
        });
        
      };

      const isFocused = useIsFocused();

      useEffect(() => {
        if(isFocused) {
          getItems(car_id, prop_id)
        }
    },[isFocused])



    console.log(car_id, prop_name, prop_id)
  return (
    <View style={styles.main}>
        <Header_Prop navigation={navigation} prop_name={prop_name} prop_id={prop_id} car_id={car_id}/>
        {/* <Header_Stat  /> */}
        <FlatList data={PropList} renderItem={({item}) => (
              <TouchableOpacity onPress={() => navigation.navigate('showProp', {id : item.index, sname : item.title, stext : item.text})}>
                <Text style={styles.text}>{item.title}</Text>
              </TouchableOpacity>
            )}
            />
       
    </View>
      
  );
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'darkslateblue',
        // marginBottom: 100
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
    button: {
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
    }
});