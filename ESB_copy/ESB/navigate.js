import React from "react";
import Main from './pages/main.js';
import Prof from "./pages/prof";
import Status from "./pages/status";
import Prop from "./pages/prop.js";
import CreateProp from "./pages/CreateProp.js";
import ShowProp from "./pages/showProp.js";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";



const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
        
            <Stack.Screen
                name="main"
                component={Main}
                options={{ gestureEnabled: false}}
            />
            <Stack.Screen
                name="prof"
                component={Prof}
            />
            <Stack.Screen
                name="status"
                component={Status}
            />
            <Stack.Screen
                name="prop"
                component={Prop}
            />
            <Stack.Screen
                name="createProp"
                component={CreateProp}
            />
            <Stack.Screen
                name="showProp"
                component={ShowProp}
            />
        </Stack.Navigator>

    </NavigationContainer>

}