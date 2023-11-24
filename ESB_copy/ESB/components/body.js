import React from 'react'; //------------------BODY
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Body() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Внесите название вашего авто</Text>

      <TextInput style={styles.textinput}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 30,
        height: 300,
        backgroundColor: 'slateblue'
    },
    text: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    },
    textinput: {
        backgroundColor: 'white',
        margin: 25,
        height: 30
    }
});
