import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image, TouchableOpacity, View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import thirdScreen from '../screens/thirdScreen';
import fifthScreen from '../screens/fifthScreen';
import secondScreen from '../screens/secondScreen';
import forthScreen from '../screens/forthScreen';
// import screen1 from '../assets/svg/ScreenFirst';
// import screen3 from '../assets/svg/screen3';
// import screen4 from '../assets/svg/screen4';
// import screen5 from '../assets/svg/screen5';
// import screen2 from '../assets/svg/screen2';
import ScreenFirst from '../assets/svg/ScreenFirst';
import Screen3 from '../assets/svg/Screen3';
import Screen5 from '../assets/svg/Screen5';
import Screen2 from '../assets/svg/Screen2';
import Screen4 from '../assets/svg/Screen4';
import SecondScreen from '../screens/secondScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                headerTitleStyle: {
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 24,
                },
                headerShadowVisible: false,
                tabBarStyle: {
                    backgroundColor: '#000000',
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <ScreenFirst fill={focused ? '#AC1430' : '#FFFFFF'}/>
                    ),
                }}
            />
            <Tab.Screen
                name="secondScreen"
                component={SecondScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: 'Favorite place',
                    tabBarIcon: ({ focused }) => (
                        <Screen2 fill={focused ? '#AC1430' : '#FFFFFF'}/>
                    ),
                }}
            />
            <Tab.Screen
                name="thirdScreen"
                component={thirdScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: 'FACTS AND HISTORY',
                    tabBarIcon: ({ focused }) => (
                        <Screen3 fill={focused ? '#AC1430' : '#FFFFFF'}/>
                    ),
                }}
            />
            <Tab.Screen
                name="forthScreen"
                component={forthScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: 'Favorite place',
                    tabBarIcon: ({ focused }) => (
                        <Screen4 fill={focused ? '#AC1430' : '#FFFFFF'}/>
                    ),
                }}
            />
            <Tab.Screen
                name="fifthScreen"
                component={fifthScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: 'Favorite place',
                    tabBarIcon: ({ focused }) => (
                        <Screen5 fill={focused ? '#AC1430' : '#FFFFFF'}/>
                    ),
                }}
            />

        </Tab.Navigator>
    );
};

export default MainTabNavigator;
