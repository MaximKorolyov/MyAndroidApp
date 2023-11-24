
import React from 'react'; //------------------HEADER
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Гараж</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 30,
        height: 70,
        backgroundColor: 'slateblue'
    },
    text: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    }
});
