import React, { useState } from 'react'; //------------------PROFILE
import { StyleSheet, TouchableOpacity, View, Text, FlatList, ScrollView } from 'react-native';
import * as SQLite from 'expo-sqlite'; 
import Header from '../components/header';
import { DelItem, ExistTable, addItem, createTable } from '../database/database';
import Header_Prof from '../components/profile/header';
import Body_Prof from '../components/profile/body';

// navigation.navigate('status')



export default function Prof({navigation, route}) {
    const {id} = route.params
    const {carname} = route.params
  return (
    <View style={styles.main}>
        <ScrollView>

        <Header_Prof />
        <View style={styles.container}>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('main')}>
                        <Text style={styles.plus}>G</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('status', {id : id, carname : carname})}> 
                        <Text style={styles.plus}>S</Text>
                </TouchableOpacity>

            </View>
            
            <Body_Prof index={id}/>
            
        </ScrollView>
    </View>
      
  );
}


const styles = StyleSheet.create({
    main: {
        // flex: 1,
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
    button: {
        alignItems: 'center',
        backgroundColor: '#876ED7',
        padding: 15,
        height: 90,
        width: 90,
        borderRadius: 50
    },
    plus: {
        fontSize: 40
    },
    body: {
        alignItems: 'center',
        paddingTop: 40,
    },
    container: {
        flex: 1,
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },  
});

