import * as SQLite from 'expo-sqlite'; 


// export function ExistTable(t_name){
//   const db = SQLite.openDatabase('database.db');

//   // Проверка существования таблицы
//   db.transaction(tx => {
//     tx.executeSql(
//       "SELECT name FROM sqlite_master WHERE type='table' AND name=(?)",
//       [t_name],
//       (_, results) => {
//         if (results.rows.length > 0) {
//           console.log('Таблица существует ', t_name);
//           return true;
//         } else {
//           console.log('Таблица не существует ', t_name);
//           return false;
//         }
//       }
//     );
//   });
// }

export function ExistTable(t_name){
  const db = SQLite.openDatabase('database.db');

  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name=(?)",
        [t_name],
        (_, results) => {
          if (results.rows.length > 0) {
            console.log('Таблица существует ', t_name);
            resolve(true); // Возвращаем true через успешный промис
          } else {
            console.log('Таблица не существует ', t_name);
            resolve(false); // Возвращаем false через успешный промис
          }
        },
        (_, error) => {
          console.log('Ошибка при выполнении SQL-запроса:', error);
          reject(error); // Возвращаем ошибку через отклоненный промис
        }
      );
    });
  });
}


export function createTable() {
  const db = SQLite.openDatabase('database.db');
  let t_name = 'cars';
  if (ExistTable(t_name)){
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS cars (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, mileage TEXT, year INTEGER, color TEXT);',
      [],
      () => {
        console.log('Таблица успешно создана');
      },
      (_, error) => {
        console.log('Ошибка создания таблицы:', error);
      }
    );
  });
  }
 };
 
  
// createTable();






export function DelItem(id){
  const db = SQLite.openDatabase('database.db');
  
  db.transaction((tx) => {
    tx.executeSql(
      'DELETE From cars where id = (?);',
      [id],
      (_, result) => {
        console.log('Все элементы удалены', result);
      },
      (_, error) => {
        console.log('Ошибка Удаления элемента:', error);
      }
    );
  });
};


export function createTableCars(){
  const db = SQLite.openDatabase('database.db');
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Cars (id INTEGER PRIMARY KEY AUTOINCREMENT, carname TEXT NOT NULL, color TEXT DEFAULT "Не задан", mileage TEXT DEFAULT "0", last_mileage TEXT DEFAULT "0", last_to TEXT);',
        [],
      () => {
        console.log('Таблица Cars успешно создана');
      },
      (_, error) => {
        console.log('Ошибка создания таблицы:', error);
      }
      );
    });
};

export function createTableProps(){
  const db = SQLite.openDatabase('database.db');
  const list = ['Подвеска передняя', 'Подвеска задняя', 'КПП', 'Сцепление',
                  'Двигатель', 'Тормозная система', 'Колеса и шины',
                  'Кузов', 'Электрика двигателя', 'Электрика кузова', 'Рулевое управление',
                  'Система охолождения', 'Топлевная система', 'Впуск и выпуск']

  ExistTable('Props')
  .then(flag => {
    // console.log(flag)
    if (flag == false){
      db.transaction(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS Props (id_prop INTEGER PRIMARY KEY AUTOINCREMENT, propname TEXT NOT NULL)',
          [],
        () => {
          console.log('Таблица Props успешно создана');
        },
        (_, error) => {
          console.log('Ошибка создания таблицы:', error);
        }
        );
      });

      for(let i = 0; i<list.length; i++){
        db.transaction((tx) => {
          tx.executeSql(
            'INSERT INTO Props (propname) VALUES (?);'
            ,
            [list[i]],
            (_, result) => {
              console.log('Элемент успешно добавлен:', result);
            },
            (_, error) => {
              console.log('Ошибка добавления элемента:', error);
            }
          );
        });
      };
    };
  });


};

export function createTableStatus(){
  const db = SQLite.openDatabase('database.db');
  db.transaction(tx => {
    
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS Status (idstatus INTEGER PRIMARY KEY AUTOINCREMENT, sname TEXT NOT NULL, stext TEXT NOT NULL, cars_id TEXT, prop_id TEXT, FOREIGN KEY(cars_id) REFERENCES Cars(id), FOREIGN KEY(prop_id) REFERENCES Propsprops(id_prop))',
      [],
      () => {
        console.log('Таблица Status успешно создана');
      },
      (_, error) => {
        console.log('Ошибка создания таблицы:', error);
      }
    );
  });

}

export function Drop_Cars(){
  const db = SQLite.openDatabase('database.db');
  db.transaction(tx => {
    tx.executeSql(
      ' DROP TABLE IF EXISTS cars;'
      ,
      [],
      (_, result) => {
        console.log('Элемент успешно Удален:', result);
      },
      (_, error) => {
        console.log('Ошибка добавления элемента:', error);
      }
    );
  });
 
}

export function Drop_Props(){
  const db = SQLite.openDatabase('database.db');
  db.transaction(tx => {
    tx.executeSql(
      ' DROP TABLE IF EXISTS Status;'
      ,
      [],
      (_, result) => {
        console.log('Элемент успешно Удален:', result);
      },
      (_, error) => {
        console.log('Ошибка добавления элемента:', error);
      }
    );
  });
 
}


export function addItem(name){
  const db = SQLite.openDatabase('database.db');
  if(name == ''){
    return 0;
  }
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO Cars (carname) VALUES (?);',
      [name],
      (_, result) => {
        console.log('Элемент успешно добавлен:', result);
      },
      (_, error) => {
        console.log('Ошибка добавления элемента:', error);
      }
    );
  });
};

export function UpdateGeneralInfo(color, mileage, id){
  const db = SQLite.openDatabase('database.db');
  db.transaction((tx) => {
    tx.executeSql(
      'UPDATE Cars SET color = (?), mileage = (?) WHERE id = (?);',
      [color, mileage, id],
      (_, result) => {
        console.log('Элемент успешно обновлен:', result.rows);
      },
      (_, error) => {
        console.log('Ошибка обновления элемента:', error);
      }
    );
  });
};


export function UpdateTOInfo(id){
  const db = SQLite.openDatabase('database.db');
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today = dd + '.' + mm + '.' + yyyy;
  db.transaction((tx) => {
    tx.executeSql(
      'UPDATE Cars SET last_to = (?), last_mileage = "0" WHERE id = (?);',
      [today, id],
      (_, result) => {
        console.log('Элемент успешно обновлен:', result.rows);
      },
      (_, error) => {
        console.log('Ошибка обновления элемента:', error);
      }
    );
  });
};

export function UpdateMileage(mileage_new, mileage_old, last_mileage, id){
  let summ = 0
  console.log(mileage_new, mileage_old, last_mileage)
  summ = Number(mileage_new.replace(/ /g,'') - mileage_old.replace(/ /g,'')) 
  summ += Number(last_mileage.replace(/ /g,''))
  console.log(summ)
  const db = SQLite.openDatabase('database.db');
  db.transaction((tx) => {
    tx.executeSql(
      'UPDATE Cars SET mileage = (?), last_mileage = (?) WHERE id = (?);',
      [mileage_new, String(summ), id],
      (_, result) => {
        console.log('Элемент успешно обновлен:', result.rows);
      },
      (_, error) => {
        console.log('Ошибка обновления элемента:', error);
      }
    );
  });
};

export function addProp(name,textt,car_id,prop_id){
  const db = SQLite.openDatabase('database.db');
  if(name == ''){
    return 0;
  }
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO Status (sname, stext, cars_id, prop_id) VALUES ((?),(?),(?),(?));',
      [name, textt, car_id, prop_id],
      (_, result) => {
        console.log('Элемент успешно добавлен:', result);
      },
      (_, error) => {
        console.log('Ошибка добавления элемента:', error);
      }
    );
  });
};

export function DelProp(prop_id){
  const db = SQLite.openDatabase('database.db');
  
  db.transaction((tx) => {
    tx.executeSql(
      'DELETE From Status where idstatus = (?);',
      [prop_id],
      (_, result) => {
        console.log('"Элемент удален"', result);
      },
      (_, error) => {
        console.log('Ошибка Удаления элемента:', error);
      }
    );
  });
};




export const ExistTableName = () => {

  
  const db = SQLite.openDatabase('database.db'); // Бесконечный Вызов, пофиксить
  
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT name FROM sqlite_master WHERE type='table'",
      [],
      (_, {rows}) => {
          console.log(rows._array)
      },
      (_, error) => {
        console.log('Ошибка получения элементов:', error);
      }
    );
  });
  
};