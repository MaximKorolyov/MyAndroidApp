import React, { useState } from 'react'; //------------------HEADER-STATUS
import { StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; 
import { DelProp } from '../../database/database';
 

export default function Header_Show({navigation, id}) {

    const idstatus = id
    function DelStatusButton(idstatus){
        Alert.alert('Подтверждение', 'Неисправность устранена или не актуальна?', [
            {
              text: 'Нет',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'Да', onPress:() =>  DelStatus(idstatus)},
          ]);
    }   

    function DelStatus(idstatus){
        DelProp(idstatus)
        navigation.goBack()
    }


    return (
        <View>

            <View style={styles.main}>
                
                <View style={styles.row}> 
                    <TouchableOpacity onPress={() =>  DelStatusButton(idstatus)}>
                        <FontAwesome5  name="edit" size={30} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.text}>prop_name</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons  name="keyboard-return" size={40} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 50,
        height: 100,
        backgroundColor: 'slateblue'
    },
    row: {
        flexDirection: 'row',
       justifyContent: 'space-around',

   },
    text: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
        // marginLeft: 40,
    },
    container: {
        flex: 1,
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 20,
        alignItems: 'center'
      },  
      textmodal: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center'
    },
    mainmodalbody: {
        flex: 1,
        backgroundColor: 'darkslateblue',
    },
    textfl: {
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
    rowmodal: {
        flexDirection: 'row',
        justifyContent: 'space-between',

   },
   mainmodal: {
    paddingTop: 20,
    height: 80,
    backgroundColor: 'slateblue',
  
},
body: {
    paddingTop: 50,
}
});
