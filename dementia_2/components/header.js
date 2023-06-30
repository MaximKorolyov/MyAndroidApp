import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert } from 'react-native';

export default function Header() {



  return (
     <View style={styles.main}>
        <Text style={styles.text} >Вещи, о которых постоянно забываешь</Text>
     </View>

  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#F0F8FF',
  },
  main: {
    paddingTop: 50,
    height: 100,
    backgroundColor: '#00BFFF',
    
  },
});