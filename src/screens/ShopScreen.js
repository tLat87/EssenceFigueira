import {Alert, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import BlackNaiskos from '../assets/svg/BlackNaiskos';
import Heart from '../assets/svg/Heart';
import RedCoins from '../assets/svg/RedCoins';
import RedBack from '../assets/svg/RedBack';
import {addLives} from '../redux/slices/livesSlice';
import {useDispatch, useSelector} from 'react-redux';
import {decrement} from '../redux/slices/scoreSlice';

const ShopScreen = ({navigation}) => {

    const dispatch = useDispatch();
    const score = useSelector(state => state.score.score);

    const handleBuyLives = (count, price) => {
        if (score >= price) {
            dispatch(addLives(count));
            dispatch(decrement(price));
            Alert.alert('Success!', `You bought ${count} ${count === 1 ? 'life' : 'lives'}!`);
        } else {
            Alert.alert('Not enough points', 'Earn more score to make a purchase!');
        }
    };

    return (
        <View style={{backgroundColor: '#000', flex: 1, paddingTop: 80, padding: 24}}>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <RedBack/>
                </TouchableOpacity>
                <View style={{}}>
                    <Text style={{color:'#AC1430', fontSize: 36}}>
                       Shop
                    </Text>
                </View>
            </View>

            <View style={{backgroundColor:'#CABA71',marginBottom: 20, width:'100%', borderRadius: 20, padding:20}}>

            <Text style={{ fontSize: 24,
                    fontWeight: 'bold',
                    color: '#000',
                    textAlign: 'center',
                marginBottom: 20
                }}>Get extra lives here!</Text>
                <Heart/>

                <View style={{flexDirection: 'row',marginTop: 20}}>
                    <Text style={{ fontSize: 24,
                        fontWeight: 'bold',
                        color: '#000',
                        textAlign: 'center',
                        marginRight: 100
                    }}>Get</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <RedCoins/>
                        <Text style={{ fontSize: 16,
                            fontWeight: 'bold',
                            marginLeft: 8,
                            color: '#000',
                            textAlign: 'center',
                        }}>
                            20
                        </Text>
                    </View>
                </View>
                <TouchableOpacity  onPress={() => handleBuyLives(1, 20)} style={{position: 'absolute', bottom: -10,  right: -10, padding: 20, borderRadius: 50, borderBottomRightRadius: 0, backgroundColor:'#FFE6A3'}}>
                    <BlackNaiskos/>
                </TouchableOpacity>
            </View>


            <View style={{backgroundColor:'#CABA71',marginBottom: 20, width:'100%', borderRadius: 20, padding:20}}>

                <Text style={{ fontSize: 24,
                    fontWeight: 'bold',
                    color: '#000',
                    textAlign: 'center',
                    marginBottom: 20
                }}>Get extra lives here!</Text>

                <View style={{flexDirection: 'row'}}>
                    <Heart/>
                    <Heart/>
                </View>

                <View style={{flexDirection: 'row',marginTop: 20}}>
                    <Text style={{ fontSize: 24,
                        fontWeight: 'bold',
                        color: '#000',
                        textAlign: 'center',
                        marginRight: 100
                    }}>Get</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <RedCoins/>
                        <Text style={{ fontSize: 16,
                            fontWeight: 'bold',
                            marginLeft: 8,
                            color: '#000',
                            textAlign: 'center',
                        }}>
                            40
                        </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => handleBuyLives(2, 40)} style={{position: 'absolute', bottom: -10,  right: -10, padding: 20, borderRadius: 50, borderBottomRightRadius: 0, backgroundColor:'#FFE6A3'}}>
                    <BlackNaiskos/>
                </TouchableOpacity>
            </View>

            <View style={{backgroundColor:'#CABA71',marginBottom: 20, width:'100%', borderRadius: 20, padding:20}}>

                <Text style={{ fontSize: 24,
                    fontWeight: 'bold',
                    color: '#000',
                    textAlign: 'center',
                    marginBottom: 20
                }}>Get extra lives here!</Text>

                <View style={{flexDirection: 'row'}}>
                    <Heart/>
                    <Heart/>
                    <Heart/>
                </View>

                <View style={{flexDirection: 'row',marginTop: 20}}>
                    <Text style={{ fontSize: 24,
                        fontWeight: 'bold',
                        color: '#000',
                        textAlign: 'center',
                        marginRight: 100
                    }}>Get</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <RedCoins/>
                        <Text style={{ fontSize: 16,
                            fontWeight: 'bold',
                            marginLeft: 8,
                            color: '#000',
                            textAlign: 'center',
                        }}>
                            50
                        </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => handleBuyLives(3, 50)} style={{position: 'absolute', bottom: -10,  right: -10, padding: 20, borderRadius: 50, borderBottomRightRadius: 0, backgroundColor:'#FFE6A3'}}>
                    <BlackNaiskos/>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default ShopScreen
