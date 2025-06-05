import {
    ImageBackground,
    Modal,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';
import Save from '../assets/svg/Save';
import BlackNaiskos from '../assets/svg/BlackNaiskos';
import RedBack from '../assets/svg/RedBack';
import DownArrow from '../assets/svg/DownArrow';

const VoteInfoScreen = ({ navigation, route }) => {
    const {item} = route.params;

    return (
        <View style={{ backgroundColor: '#000', flex: 1, paddingTop: 80, padding: 24 }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 20,
                }}
            >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <RedBack />
                </TouchableOpacity>
                <View>
                    <Text style={{ color: '#AC1430', fontSize: 36 }}>
                        🎭 Fact:
                    </Text>
                </View>
            </View>
            <Text style={{ color: '#fff', fontSize: 18, marginBottom: 12 }}>
                {item.title}
            </Text>
            <ImageBackground
                source={
                     item.img
                }
                resizeMode="cover"
                imageStyle={{ borderRadius: 20 }}
                style={{
                    marginBottom: 20,
                    height: 240,
                    padding: 20,
                }}
            >
                {/*<TouchableOpacity*/}
                {/*    style={{*/}
                {/*        position: 'absolute',*/}
                {/*        bottom: -10,*/}
                {/*        right: -10,*/}
                {/*        padding: 20,*/}
                {/*        borderRadius: 50,*/}
                {/*        borderBottomRightRadius: 0,*/}
                {/*        backgroundColor: '#AC1430',*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <DownArrow />*/}
                {/*</TouchableOpacity>*/}
            </ImageBackground>

            <Text style={{ color: '#fff', fontSize: 18 }}>
                {item.desc}
            </Text>

        </View>
    );
};

export default VoteInfoScreen;
