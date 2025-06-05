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

const SecretUnfoScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

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
                <TouchableOpacity onPress={() => navigation.pop(2)}>
                    <RedBack />
                </TouchableOpacity>
                <View>
                    <Text style={{ color: '#AC1430', fontSize: 36 }}>
                        You’ve unlocked a piece of history
                    </Text>
                </View>
            </View>

            <ImageBackground
                source={{
                    url: require('../assets/img/F/22558aa30f03a6cb8c3178bbd61f1322fd13212e.jpg'),
                }}
                resizeMode="cover"
                imageStyle={{ borderRadius: 20 }}
                style={{
                    marginBottom: 20,
                    height: 240,
                    padding: 20,
                }}
            >
                <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    style={{
                        position: 'absolute',
                        bottom: -10,
                        right: -10,
                        padding: 20,
                        borderRadius: 50,
                        borderBottomRightRadius: 0,
                        backgroundColor: '#AC1430',
                    }}
                >
                    <DownArrow />
                </TouchableOpacity>
            </ImageBackground>

            <Text style={{ color: '#fff', fontSize: 18 }}>
                The Chapel of Saint Peter is one of the oldest buildings in Figueira da Foz, and it holds a special place in the hearts of locals. Situated on a hill overlooking the ocean, this small stone chapel has been an important landmark for centuries. Historically, sailors would visit the chapel before embarking on long journeys, seeking protection and guidance. It was believed that the chapel could reveal their fate, as its peaceful atmosphere offered solace and hope. The chapel also became a gathering spot for the local community, where people would come together to celebrate religious festivals and offer prayers for safety and prosperity.            </Text>

            {/* Модалка */}
            <Modal
                visible={modalVisible}
                transparent
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        padding: 24,
                    }}
                >
                    <View
                        style={{
                            backgroundColor: '#1c1c1e',
                            borderRadius: 20,
                            padding: 24,
                            width: '100%',
                        }}
                    >
                        <Text style={{ color: '#fff', fontSize: 20, marginBottom: 16 }}>
                            🕯️ Hidden Historical Insight
                        </Text>
                        <Text style={{ color: '#aaa', fontSize: 16 }}>
                            📍 Location: Rua da Capela, 45, Figueira da Foz
                        </Text>
                        <Text style={{ color: '#aaa', fontSize: 16, marginTop: 20 }}>
                            🛤 How to get there:
                            A 10-minute walk from the city center or take bus No. 2 to the “São Pedro” stop.                        </Text>

                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                            style={{
                                marginTop: 20,
                                backgroundColor: '#AC1430',
                                padding: 12,
                                borderRadius: 10,
                                alignItems: 'center',
                            }}
                        >
                            <Text style={{ color: '#fff', fontSize: 16 }}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default SecretUnfoScreen;
