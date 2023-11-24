import React, { useState, useEffect } from 'react'; //------------------BODY-PROFILE
import { StyleSheet, Text, View, TouchableOpacity, Modal, Alert, TextInput} from 'react-native';
import * as SQLite from 'expo-sqlite'; 
// import CircularProgress from 'react-native-circular-progress-indicator';
import { UpdateGeneralInfo, UpdateMileage, UpdateTOInfo } from '../../database/database';

export default function Body_Prof({index}) {
    
    let data = '21.11.2023'
    let milies2 = '9.000'

    const [color, Setcolor] = useState('') // Объединить хуки в один (Массив)
    const [milies, Setmileage] = useState('0')
    const [carname, SetCarname] = useState('')
    const [last_mileage, SetLastMilage] = useState('')
    const [last_to, SetLastTO] = useState('')

    const [ActiveEdit, SetActiveEdit] = useState(false)
    const [ActiveLastMil, SetActiveLastMil] = useState(false)

    const [newMilies, SetNewMilies] = useState(milies)
    const [newColor, SetNewColor] = useState(color)

    useEffect(() => {
        getItems(index)
        console.log(index, 'useEffect')
    },[])


    const updateGeneral = (col_new, mil_new, col, mil, id) => {
        if( mil_new != '' ){
            Setmileage(newMilies.replace(/(?=(?:.{3})*$)/g, ' '))
            mil = mil_new
        }
        // let mil = milies
        if(col_new != ''){
            Setcolor(newColor)
            col = col_new
        }
        // let col = color
        UpdateGeneralInfo(col, mil, id)
        CloseModelEdit();
        getItems(index);
        

    }

    const getItems = (id) => {
        
        const db = SQLite.openDatabase('database.db'); 
        db.transaction((tx) => {
          tx.executeSql(
            'SELECT * FROM Cars where id = (?)',
            [id],
            (_, {rows}) => {
              let mil_new = rows._array[0].mileage.replace(/(?=(?:.{3})*$)/g, ' ');
              SetCarname(rows._array[0].carname)
              Setcolor(rows._array[0].color)
              Setmileage(mil_new)
              SetLastMilage(rows._array[0].last_mileage.replace(/(?=(?:.{3})*$)/g, ' '))
              SetLastTO(rows._array[0].last_to)
              console.log('Сработал')
            },
            (_, error) => {
              console.log('Ошибка получения элементов:', error);
            }
          );
        });
        
      };
    
    

    console.log(index, 'Body')
    const garag = () => {
        console.log('Гараж')
    }

    const UpdateTOInfoComplex = (index) => {
        UpdateTOInfo(index)
        getItems(index)
    }

    const UpdageMileageComplex = (milies, milies_new, last_mileage, index) => {
        UpdateMileage(milies, milies_new, last_mileage, index)
        CloseModelMile()
        getItems(index);
    }


    const TOButton = (index) => { // Пока что пустышка
        console.log(index)
        Alert.alert('Подтверждение', 'Обновить данные о ТО?', [
            {
              text: 'Нет',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'Да', onPress:() => UpdateTOInfoComplex(index) },
          ]);
        
    }

    const sost = () => {
        console.log('Состояние')
    }

    const OpenModelEdit = () => {
        SetActiveEdit(true);
    }
    const CloseModelEdit = () => {
        SetActiveEdit(false);
    }
    const OpenModelMile = () => {
        SetActiveLastMil(true);
    }
    const CloseModelMile = () => {
        SetActiveLastMil(false);
    }



  return (
    <View style={styles.main}>


     <Modal visible={ActiveEdit}>  
        <View style={styles.main}>
                <Text >Внесите актуальный цвет вашего авто </Text>
                <Text >Подсказка: Лучше указать номер краски, которая, на ваш взгляд, лучше всего подходит, или можете указать заводской номер </Text>
                <TextInput style={styles.textinput} onChangeText={SetNewColor}></TextInput>
                <Text > Внесите пробег вашего авто </Text>
                <TextInput style={styles.textinput} onChangeText={SetNewMilies}></TextInput>
                <View style={styles.row}>
                <TouchableOpacity style={styles.buttonBlock} onPress={() => updateGeneral(newColor, newMilies, color, milies, index)}>
                        <Text >Добавить</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBlock} onPress={() => CloseModelEdit()}>
                        <Text >Отмена</Text>
                 </TouchableOpacity>
                </View> 
            </View>
    </Modal> 
    {/* Пробег \/              Общая инфа  /\*/}
    <Modal visible={ActiveLastMil}>  
        <View style={styles.main}>
                <Text >Введите Последний пробег вашего авто </Text>
                <TextInput style={styles.textinput} onChangeText={SetNewMilies}></TextInput>
                <View style={styles.row}>
                <TouchableOpacity style={styles.buttonBlock} onPress={() => UpdageMileageComplex(newMilies, milies, last_mileage, index)}>
                        <Text >Добавить</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBlock} onPress={() => CloseModelMile()}>
                        <Text >Отмена</Text>
                 </TouchableOpacity>
                </View> 
            </View>
    </Modal> 



        <Text style={styles.text}>Общая информация</Text>
        <View style={styles.container}> 
            <Text style={styles.h1}>{carname}</Text>

            <View style={styles.row}> 
                <Text style={styles.h1}>Цвет:</Text>
                <Text style={styles.h2}>{color}</Text>
            </View>

            <View style={styles.row}>     
                <Text style={styles.h1}>Пробег:</Text>
                <Text style={styles.h2}>{milies} Км</Text>
            </View>
        </View>

        <Text style={styles.text}>Технический осмотр</Text>
        
        <View style={styles.container}>
            <View style={styles.row}>   
                <Text style={styles.h1}>Последнее ТО:</Text>
                <Text style={styles.h2}>{last_to}</Text>
            </View>
            <TouchableOpacity onPress={() => OpenModelMile()}>
                <View style={styles.row}>   
                    <Text style={styles.h1}>Недавний пробег:</Text>
                    <Text style={styles.h2}>{last_mileage} Км</Text>
                </View>
            </TouchableOpacity>
        </View>

        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => OpenModelEdit()}>
                                <Text>Изменить инфомацию</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => TOButton(index)}>
                        <Text>Обновить ТО</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 15,
        height: 'auto',
        
    },
    text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'left',
        padding: 7,
        marginTop: 20,
        borderBottomColor: '#AC3BD4',
        borderTopColor: '#AC3BD4',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        backgroundColor: '#67237F'
    },
    h1: {
        fontSize: 22,
        color: 'white',
        textAlign: 'left',
        padding: 15,
        paddingLeft: 40,
        backgroundColor: '#876ED6',
        // marginBottom: 10,
    },

    h2: {
        fontSize: 20,
        color: 'white',
        
        // paddingRigtht: 40,
        padding: 20,
        
    },
    container: {
        // flex: 1,
        // padding: 40,
        paddingTop: 10,
        marginBottom: 20,
        backgroundColor: '#876ED6',
       
      }, 
    row: {
         flexDirection: 'row',
        justifyContent: 'flex-start',

    },
    button: {
        margin: 20,
        borderWidth: 2,
        padding: 10,
        backgroundColor: '#67237F'
    }
});
