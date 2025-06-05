import { Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Save from '../assets/svg/Save';
import BlackNaiskos from '../assets/svg/BlackNaiskos';
import RedBack from '../assets/svg/RedBack';
import Shop from '../assets/svg/Shop';
import ShopScreen from './ShopScreen';

const fifthScreen = ({navigation}) => {

    return (
        <View style={{backgroundColor: '#000', flex: 1, paddingTop: 80, padding: 24}}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 20,
                }}
            >
                <View>
                    <Text style={{ color: '#AC1430', fontSize: 36 }}>
                        Castle Shot
                    </Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('ShopScreen')}>
                    <Shop />
                </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'#CABA71',marginBottom: 20, width:'100%', borderRadius: 20, padding:20}}>
                <Text style={{ fontSize: 16,
                    color: '#000',
                    textAlign: 'center',
                    // paddingHorizontal: 20,
                    marginBottom: 30}}>Destroy castles by matching silhouettes, earn coins, and test your accuracy!</Text>
                <Text style={{ fontSize: 24,
                    fontWeight: 'bold',
                    color: '#000',
                    textAlign: 'center',
                    width: '80%',
                }}>Test Your Aim, Conquer the Castles!</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate('GameScreen')}} style={{position: 'absolute', bottom: -10,  right: -10, padding: 20, borderRadius: 50, borderBottomRightRadius: 0, backgroundColor:'#FFE6A3'}}>
                    <BlackNaiskos/>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default fifthScreen
