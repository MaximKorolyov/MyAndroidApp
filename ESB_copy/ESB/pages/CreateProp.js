import React, { useEffect, useState } from 'react'; //------------------CREATE PROP
import { StyleSheet, TouchableOpacity, View, Text, TextInput,  } from 'react-native';
import * as SQLite from 'expo-sqlite'; 
import Header_Prop from '../components/prop/header';
import Header from '../components/header';
import { addProp } from '../database/database';



export default function CreateProp({navigation, route}) {
    
    const [sname, setSname] = useState("");
    const [stext, setStext] = useState("");
    const [error, setError] = useState("")
    const {car_id} = route.params;
    const {prop_id} = route.params;
    // const [PropList, SetPropList] = useState([])

    function add(sname,stext,car_id,prop_id){
        if (sname != '' && stext != ''){
            console.log(sname,stext,car_id,prop_id)
            addProp(sname,stext,car_id,prop_id)
            navigation.goBack()
        }
        else {
            setError("Необходимо заполнить все поля!")
        }
    }
    // useEffect(() => {
    //     getItems(car_id, prop_id)

    // },[])


    // const getItems = (car_id, prop_id) => {

  
        


    // console.log(car_id, prop_name, prop_id)
  return (
    <View style={styles.main}>
          <Header />
            <Text style={{color: "red", fontSize: 18, textAlign: 'center'}}>{error}</Text>
            <Text style={styles.text2}> Название неисправности </Text>
            <TextInput style={styles.textinput_smal} onChangeText={setSname}></TextInput>
            <Text style={styles.text2}> Описание </Text>
            <TextInput editable
                        multiline
                        maxLength={200}
                        numberOfLines={4}
                         style={styles.textinput_big} onChangeText={setStext}></TextInput>

            <View style={styles.row}>
              <TouchableOpacity style={styles.buttonBlock} onPress={() => add(sname,stext,car_id,prop_id)}>
                      <Text style={styles.textbutton}>Добавить</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonBlock} onPress={() => navigation.goBack()}>
                      <Text style={styles.textbutton}>Отмена</Text>
              </TouchableOpacity>
            </View>
        </View>
  );
}


const styles = StyleSheet.create({
    main: {
        //  flex: 1,
        flex: 1,
        backgroundColor: 'darkslateblue',

    },
    text2: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        marginTop: 20
      },

    textinput_smal: {
        backgroundColor: 'white',
        marginLeft: 25,
        marginRight: 25,
        marginTop: 15,
        height: 35,
        paddingLeft: 20,
        fontSize: 18,
        borderRadius: 40,
    },
    textinput_big: {
        backgroundColor: 'white',
        marginLeft: 25,
        marginRight: 25,
        marginTop: 15,
        padding: 10,
        fontSize: 18,
        borderRadius: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 20,
        marginLeft: 20
    },
    buttonBlock: {
        alignItems: 'center',
          backgroundColor: '#876ED7',
          padding: 6,
          height: 40,
          width: 170,
          borderRadius: 50,
          marginTop: 30
      },
    textbutton: {
        fontSize: 18,
        color: 'white',

    },
});