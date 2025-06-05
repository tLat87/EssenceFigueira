import React, { useRef, useState, useEffect } from "react";
import {
    View,
    Animated,
    PanResponder,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions, Alert, Vibration,
} from 'react-native';
// import { useDispatch, useSelector } from 'react-redux'; // Импортируем необходимые хуки
// import { addBalance } from '../redux/slices/balanceSlice'; // Импортируем действие для добавления баланса

import SvgTarget1 from '../assets/svg/Cas1';
import SvgTarget2 from '../assets/svg/Cas2';
import SvgTarget3 from '../assets/svg/Cas3';
import SvgTarget4 from '../assets/svg/Cas4';

import LineSvg from '../assets/svg/Cas1';
import ORANGEFlove from '../assets/svg/Cas3';
import CoinSvg from '../assets/svg/RedCoins'
import Pulia from '../assets/svg/Pulia';
import Gun from '../assets/svg/Gun';
import {increment} from '../redux/slices/scoreSlice';
import {useDispatch, useSelector} from 'react-redux';
import Heart from '../assets/svg/Heart';

const { width, height } = Dimensions.get("window");

const GameScreen = ({ navigation, route }) => {
    // const dispatch = useDispatch(); // Хук для диспетчеризации действий
    // const balance = useSelector(state => state.balance.value); // Получаем текущее значение баланса
    // const purchasedItems = useSelector((state) => state.purchases.items); // Получаем список купленных предметов

    const rotation = useRef(new Animated.Value(0)).current;
    const arrowPosition = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const [arrowVisible, setArrowVisible] = useState(false);
    const bowRotation = useRef(0);

    const lives = useSelector(state => state.lives.livesCount);
    const [localLives, setLocalLives] = useState(lives);
    const {
        isVibrationOn,
    } = useSelector(state => state.settings);
    const dispatch = useDispatch();
    const score = useSelector(state => state.score.score);
    const [targets, setTargets] = useState([
        { id: 1, top: 90, left: 20, width: 80, height: 80, visible: true, angleRange: [-40, -20], Svg: SvgTarget1 },
        { id: 2, top: 220, right: 70, width: 80, height: 80, visible: true, angleRange: [10, 20], Svg: SvgTarget2 },
        { id: 3, top: 420, right: 10, width: 80, height: 80, visible: true, angleRange: [30, 40], Svg: SvgTarget3 },
        { id: 4, top: 320, left: 10, width: 80, height: 80, visible: true, angleRange: [-55, -40], Svg: SvgTarget4 },
    ]);

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gesture) => {
            let angle = Math.max(-90, Math.min(90, gesture.dx / 2));
            rotation.setValue(angle);
            bowRotation.current = angle;
        },
    });

    const shootArrow = () => {
        if (isVibrationOn) {
            Vibration.vibrate(200);
        }
        setArrowVisible(true);
        let angleRad = (bowRotation.current * Math.PI) / 180;
        let velocityX = Math.sin(angleRad) * width;
        let velocityY = -Math.cos(angleRad) * height;

        Animated.timing(arrowPosition, {
            toValue: { x: velocityX, y: velocityY },
            duration: 1000,
            useNativeDriver: true,
        }).start(() => {
            setArrowVisible(false);
            arrowPosition.setValue({ x: 0, y: 0 });

            setTimeout(() => {
                checkHit();
            }, 1000);
        });
    };

    const checkHit = () => {
        let angle = bowRotation.current;
        let hit = false;

        const updatedTargets = targets.map(target => {
            if (target.visible && angle >= target.angleRange[0] && angle <= target.angleRange[1]) {
                console.log(`Hit target ID: ${target.id}`);
                hit = true;
                return { ...target, visible: false };
            }
            return target;
        });

        setTargets(updatedTargets);

        if (hit) {
            dispatch(increment(10));
        } else {
            if (localLives < 1) {
                Alert.alert('Game Over', 'You lost all your lives.', [
                    { text: 'OK', onPress: () => navigation.goBack() },
                ]);
                return;
            } else {
                setLocalLives(prev => prev - 1);
            }
        }

        if (updatedTargets.every(target => !target.visible)) {
            console.log('All targets down!');
            navigation.goBack();
        }
    };




    return (
      <View style={{flex: 1, backgroundColor: '#000'}}>
        <View style={[styles.balanceContainer, {left: '40%'}]}>
          {Array.from({length: localLives}).map((_, index) => (
            <Heart key={index} style={{marginRight: 5}} />
          ))}
        </View>

        <View style={styles.balanceContainer}>
          <CoinSvg />
          <Text style={styles.balanceText}>{score}</Text>
        </View>
        {targets.map(
          target =>
            target.visible && (
              <View
                key={target.id}
                style={{
                  position: 'absolute',
                  top: target.top,
                  left: target.left || undefined,
                  right: target.right || undefined,
                  width: target.width,
                  height: target.height,
                }}>
                <target.Svg width={target.width} height={target.height} />
              </View>
            ),
        )}

        <Animated.View
          style={{
            transform: [
              {
                rotate: rotation.interpolate({
                  inputRange: [-90, 90],
                  outputRange: ['-90deg', '90deg'],
                }),
              },
            ],
            position: 'absolute',
            bottom: 100,
            alignSelf: 'center',
          }}
          {...panResponder.panHandlers}>
          <Gun />
        </Animated.View>

        {arrowVisible && (
          <Animated.View
            style={{
              position: 'absolute',
              bottom: 80,
              left: width / 2,
              transform: [
                {translateX: arrowPosition.x},
                {translateY: arrowPosition.y},
              ],
            }}>
            <Pulia />
          </Animated.View>
        )}

        <TouchableOpacity onPress={shootArrow} style={styles.shootButton}>
          <Text style={styles.shootText}>SHOOT</Text>
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
    shootButton: {
        position: "absolute",
        bottom: 30,
        alignSelf: "center",
        // backgroundColor: "#FFDC00",
        padding: 10,
        borderRadius: 10,
    },
    shootText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#AC1430",
    },
    balanceContainer: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        top: 80,
        right: 20,
        // transform: [{ translateX: -50 }],
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: 10,
        borderRadius: 5,
    },
    balanceText: {
        color: "#FFF",
        marginLeft: 10,
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default GameScreen;
