import React from "react";
import Main from './pages/Main';
import Edit from "./pages/edit";
import Tasks from "./pages/tasks";

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name='Main'
                component={Main}
                options={{title: 'Главная'}}
            />
            <Stack.Screen 
                name='Edit'
                component={Edit}
                options={{title: 'Редактирование'}}
            />
            <Stack.Screen 
                name='Tasks'
                component={Tasks}
                options={{title: 'Я уверен'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
}