import React, { useEffect, useState } from 'react'; //------------------PROFILE
import { StyleSheet, TouchableOpacity, View, Text, FlatList, ScrollView } from 'react-native';
import * as SQLite from 'expo-sqlite'; 
import Header from '../components/header';
import { DelItem, ExistTable, addItem, createTable } from '../database/database';
import Header_Show from '../components/show/header';






export default function ShowProp({navigation, route}) {
    
    
    const {id} = route.params
    const {sname} = route.params
    const {stext} = route.params



  return (
    <View style={styles.main}>
        <Header_Show navigation={navigation} id = {id}  />
        <View>
            <Text style={styles.texttitle}>{sname}</Text>
                <Text style={styles.text2}>Описание</Text>
            <Text style={styles.textdesc}>{stext}</Text>
        </View>
    </View>
      
  );
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'darkslateblue',
    },
    texttitle: {
        padding: 15,
        fontSize: 28,
        textAlign: 'center',
        borderRadius: 0,
        marginLeft: '15%',
        marginTop: 20,
        width: '70%',
        
        backgroundColor: '#876ED7',
        
    },
    textdesc: {
        padding: 20,
        fontSize: 22,
        textAlign: 'left',
        borderRadius: 10,
        marginTop: 20,
        width: '100%',
        
        backgroundColor: '#876ED7',
        
    },
    text2: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
        marginTop: 50
      },
});

