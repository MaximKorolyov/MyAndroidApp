import * as SQlite from 'expo-sqlite'
import * as FileSystem from 'expo-file-system'
import { Configuration } from './config'


export const CheckExistDB = async dbName => {
    const dbDir = FileSystem.documentDirectory + 'SQLite/'
    const dirInfo = await FileSystem.getInfoAsync(dbDir+dbName)
    if (!dirInfo.exists){
        console.log('DB is not exist')
        return false
    }
    else{
        console.log('DB is exist')
        return true

    }
}

export async function createDB(dbName){

    const db = await SQlite.openDatabase(dbName)
    db.transaction(tx => {
        tx.executeSql(`
         CREATE TABLE "confidence" (
            "name" TEXT,
            "value" TEXT );
        
        
        `)
    }), error => console.log(`create error: ${error}`);
    console.log('DB created')
}

export async function selectConfidence(dbName){
    const db = SQlite.openDatabase(dbName);
    const query =  "SELECT name FROM confidence WHERE (id = 0)";
    var params = [];
    db.transaction((tx) => {
        tx.executeSql(query, params, (tx, results) => {
            console.log(results)
        })
    })
    
    // db.transaction(tx => (
    //         tx.executeSql(`SELECT * FROM confidence`,
    //         [],
    //         (_, { rosw }) => {
    //             console.log(JSON.stringify(rows))
    //         }
    //     )
    // )), error => console.log(`select error: ${error}`);
    console.log(JSON.stringify(results[0]))
}

export async function insertIntoConfidence(dbName, name="Дверь закрыта", value='false'){
    const dirInfo = await CheckExistDB(dbName);
    if(!dirInfo) await createDB(dbName)
    const db = await SQlite.openDatabase(dbName);

    db.transaction(tx => (
        tx.executeSql(`INSERT INTO confidence values ('${name}', '${value})'`)
    )), error => console.log(`insert error: ${error}`);
    console.log('DB is insert')
}
