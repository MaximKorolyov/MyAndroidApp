import React, { useState } from 'react'; //------------------PROFILE
import { StyleSheet, TouchableOpacity, View, Text, FlatList, ScrollView } from 'react-native';

import Header_Stat from '../components/status/header';



export default function Status({navigation, route}) {
    const ListProps = [{index: '1', title: 'Подвеска передняя'}, {index: '2', title: 'Подвеска задняя'}, {index: '3', title: 'КПП'}, {index: '4', title: 'Сцепление'},
                  {index: '5', title: 'Двигатель'}, {index: '6', title: 'Тормозная система'}, {index: '7', title: 'Колеса и шины'},
                  {index: '8', title: 'Кузов'}, {index: '9', title: 'Электрика двигателя'}, {index: '10', title: 'Электрика кузова'}, {index: '11', title: 'Рулевое управление'},
                  {index: '12', title: 'Система охолождения'}, {index: '13', title: 'Топлевная система'}, {index: '14', title: 'Впуск и выпуск'}]

    const {id} = route.params
    const {carname} = route.params
    console.log(id, carname)
  return (
    <View style={styles.main}>
        {/* <ScrollView> */}
        <Header_Stat  navigation={navigation} carname={carname}/>
        <FlatList data={ListProps} renderItem={({item}) => (
              <TouchableOpacity onPress={() => navigation.navigate('prop', {car_id : id, prop_name : item.title, prop_id : item.index})}>
                <Text style={styles.text}>{item.title}</Text>
              </TouchableOpacity>
            )}
            />
        {/* </ScrollView> */}
    </View>
      
  );
}


const styles = StyleSheet.create({
    main: {
        // flex: 1,
        backgroundColor: 'darkslateblue',
        marginBottom: 100
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