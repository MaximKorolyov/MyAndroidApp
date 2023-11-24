import React from 'react'; //------------------Body-STATUS
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Body_Stat() {

    let carname = 'Lancer 10'

const GAZ_24 = () => {
    console.log('Я волга')
    const list = ['Подвеска передняя', 'Подвеска задняя', 'КПП', 'Сцепление',
                  'Двигатель', 'Тормозная система', 'Колеса и шины',
                  'Кузов', 'Электрика двигателя', 'Электрика кузова', 'Рулевое управление',
                  'Система охолождения', 'Топлевная система', 'Впуск и выпуск']
}

    return (
        <View style={styles.main}>
            <View style={styles.row}> 
                <Text style={styles.text}>{carname}</Text>
                <TouchableOpacity onPress={() => GAZ_24()}>
                    <MaterialIcons style={styles.icon} name="keyboard-return" size={40} color="white" />
                </TouchableOpacity>
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
       justifyContent: 'space-between',

   },
    text: {
        fontSize: 22,
        color: 'white',
        textAlign: 'left',
        marginLeft: 50,
    },
    icon: {
        marginRight: 40,
    }
});
