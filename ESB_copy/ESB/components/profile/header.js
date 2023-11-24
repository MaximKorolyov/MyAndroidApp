import React from 'react'; //------------------HEADER-PROFILE
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';




export default function Header_Prof({navigation}, ) {

    const garag = () => {
        console.log('Гараж')
    }
    

    const sost = () => {
        console.log('Состояние')
    }
    // const GoToMain = () => {
    //     // navigation.replace('main');
    //     navigation.navigate('main');
    // }

    return (
        <View style={styles.main}>
        <Text style={styles.text}>Профиль</Text>
            {/* <View style={styles.container}>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('status')}>
                        <Text style={styles.plus}>G</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => sost()}>
                        <Text style={styles.plus}>S</Text>
                </TouchableOpacity>

            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 50,
        height: 90,
        backgroundColor: 'slateblue'
    },
    text: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#876ED7',
        padding: 6,
        height: 70,
        width: 70,
        borderRadius: 50
    },
    container: {
        flex: 1,
        padding: 40,
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },  
    plus: {
        fontSize: 40
    },
});
