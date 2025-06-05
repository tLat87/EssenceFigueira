import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./src/redux/store";
import WelcomeScreen from "./src/navigation/WelcomeScreen";
import MainTabNavigator from "./src/navigation/MainTabNavigator";
import FullInfoScreen from "./src/screens/FullInfoScreen";
import GameProccessScreen from "./src/screens/GameProccessScreen";
import SecretUnfoScreen from "./src/screens/SecretUnfoScreen";
import VoteInfoScreen from "./src/screens/VoteInfoScreen";
import VoteScreen from "./src/screens/VoteScreen";
import RandomFactScreen from "./src/screens/RandomFactScreen";
import TimeLineScreen from "./src/screens/TimeLineScreen";
import ShopScreen from "./src/screens/ShopScreen";
import GameScreen from "./src/screens/GameScreen";
import BackgroundMusic from "./src/component/BackgroundMusic";
import SavedStotiesScreen from "./src/screens/SavedStotiesScreen";

const Stack = createStackNavigator();

const Left = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
        </TouchableOpacity>
    )
}


export default function App() {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <BackgroundMusic />
                    <Stack.Navigator screenOptions={{ headerLeft: Left, headerStyle: { backgroundColor: '#360013' },
                        headerTitleStyle: {
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 24,
                        },
                    }}>
                        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="MainTab" component={MainTabNavigator} options={{ headerShown: false }} />
                        <Stack.Screen name="FullInfoScreen" component={FullInfoScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="GameProccessScreen" component={GameProccessScreen} options={{ headerShown: false }} />

                        <Stack.Screen name="SecretUnfoScreen" component={SecretUnfoScreen} options={{ headerShown: false }} />

                        <Stack.Screen name="VoteInfoScreen" component={VoteInfoScreen} options={{ headerShown: false }} />

                        <Stack.Screen name="VoteScreen" component={VoteScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="RandomFactScreen" component={RandomFactScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="TimeLineScreen" component={TimeLineScreen} options={{ headerShown: false }} />

                        <Stack.Screen name="ShopScreen" component={ShopScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="GameScreen" component={GameScreen} options={{ headerShown: false  }} />

                        <Stack.Screen name="SavedStotiesScreen" component={SavedStotiesScreen} options={{ headerShown: false  }} />
                    </Stack.Navigator>
                </NavigationContainer>
          </PersistGate>
         </Provider>
    );
}
