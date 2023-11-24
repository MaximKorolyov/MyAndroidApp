
import React, { useState, useEffect } from 'react'; //------------------APP
import { StyleSheet, View } from 'react-native';


import * as NavigationBar from "expo-navigation-bar";

import { Drop_Cars, Drop_Props, ExistTable, createTable, createTableCars, createTableProps, createTableStatus, ExistTableName } from './database/database.js';

import Navigate from './navigate.js'





export default function App() {

  useEffect(() => {
    // // Drop_Cars();
    // ExistTableName();
    createTableCars();
    createTableProps();
    createTableStatus();
  }, [])
  


  
  NavigationBar.setBackgroundColorAsync("slateblue");
  return (
    
    
    <Navigate />
    
   
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslateblue',
  },  
});






// Сделано (19 ноября)

// Создал базы данных (В теблице )
// Вывод в prof работает (Почему то при первом заходе getItem срабатывает 4 раза) !!!!!!!!!!!!!!!!!!!
// В prof передается id выбранный в main
// Ещё что то было, но я забыл

// Готово

// Обновить базу данный Cars (Добавить столбец с последним пробегом) ГОТОВО+++++++++++++++++++++++++++++++++
// Настроить Alert в body
// Работа в body_prof (Добавить 2 модальных окна) 1: Редактирование; 2: Обновление Данных о последнем пробеге
// Передать id в status
// Фронт для status
// Модальное окно для Status (Создание)
// дабавить добавление prop
// добавить удаление prop
// Модальное окно для Status (Просмотр/удаление)

// Осталось сделать




// Оптимизировать prof
// Сделать удаление в main (В последнюю очередь)
// Настроить Стили для модальных окон в body (prof)
// Отредактировать все функции get item (Убрать бесконечный/многоразовый вызов)


