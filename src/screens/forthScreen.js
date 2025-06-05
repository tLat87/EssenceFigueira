import React from 'react';
import {
    Text,
    TouchableOpacity,
    Vibration,
    View,
    Switch,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setMusic, setVibration } from '../redux/slices/settingsSlice';

import BlackNaiskos from '../assets/svg/BlackNaiskos';
import Music from '../assets/svg/Music';
import Vibro from '../assets/svg/Vibro';
import {resetLives} from '../redux/slices/livesSlice';
import {clearFacts} from '../redux/slices/savedFactsSlice';
import {resetScore} from '../redux/slices/scoreSlice';

const forthScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    // Читаем глобальные значения из settingsSlice
    const isMusicOn = useSelector((state) => state.settings.isMusicOn);
    const isVibrationOn = useSelector((state) => state.settings.isVibrationOn);

    const toggleMusic = () => {
        dispatch(setMusic(!isMusicOn));
        // Добавь сюда управление музыкой, если нужно
    };

    const toggleVibration = () => {
        const newValue = !isVibrationOn;
        dispatch(setVibration(newValue));
        if (newValue) {
            Vibration.vibrate(200);
        }
    };

    const toggleReset = () => {
        dispatch(resetLives());
        dispatch(clearFacts());
        dispatch(resetScore());
    };


    return (
        <View style={{ backgroundColor: '#000', flex: 1, paddingTop: 80, padding: 24 }}>
            <View
                style={{
                    backgroundColor: '#CABA71',
                    marginBottom: 20,
                    width: '100%',
                    borderRadius: 20,
                    padding: 20,
                }}>
                {/* Music */}
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        marginBottom: 24,
                    }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Music />
                        <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 8 }}>
                            Music
                        </Text>
                    </View>

                    <Switch
                        value={isMusicOn}
                        onValueChange={toggleMusic}
                        thumbColor={isMusicOn ? '#000' : '#fff'}
                        trackColor={{ false: '#999', true: '#fff' }}
                    />
                </View>

                {/* Vibration */}
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        marginBottom: 24,
                    }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Vibro />
                        <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 8 }}>
                            Vibration
                        </Text>
                    </View>

                    <Switch
                        value={isVibrationOn}
                        onValueChange={toggleVibration}
                        thumbColor={isVibrationOn ? '#000' : '#fff'}
                        trackColor={{ false: '#999', true: '#fff' }}
                    />
                </View>

                <TouchableOpacity onPress={toggleReset}>
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: 'bold',
                            marginLeft: 8,
                            alignSelf: 'center',
                        }}>
                        Reset progress
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {}}
                    style={{
                        position: 'absolute',
                        bottom: -10,
                        right: -10,
                        padding: 20,
                        borderRadius: 50,
                        borderBottomRightRadius: 0,
                        backgroundColor: '#FFE6A3',
                    }}>
                    <BlackNaiskos />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default forthScreen;
