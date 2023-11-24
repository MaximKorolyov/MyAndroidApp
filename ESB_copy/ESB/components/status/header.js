import React from 'react'; //------------------HEADER-STATUS
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 


export default function Header_Stat({navigation, carname}) {

    



    return (
        <View style={styles.main}>
            <View style={styles.row}> 
                <Text style={styles.text}>{carname}</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
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
