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
import Info from '../assets/svg/Info';

const data = [
    {
        title: 'Fandango Dance',
        desc: 'Did you know that Fandango was not just a dance but a way to resolve conflicts? In the past, fishermen and merchants used Fandango as a friendly duel—whoever danced with more skill, energy, and style was declared the winner, avoiding actual fights. This tradition helped maintain harmony in the community and strengthened social bonds.',
        url: require('../assets/img/F/516cef4cfeb16d17005cebb271763d46706afe7c.jpg'),
    },
    {
        title: 'Feast of Saint John',
        desc: 'Why do people give each other garlic bulbs during the Feast of Saint John? This quirky tradition dates back centuries when garlic was believed to ward off evil spirits and bring health. Today, it’s more of a playful gesture—friends and even strangers exchange garlic as a fun way to spread laughter and good luck!',
        url: require('../assets/img/F/8a2bb034ac6c1fdd88dd7fa68e3327e4a674d883.jpg'),
    },
    {
        title: 'Fishermen’s Market',
        desc: 'Figueira’s fishermen have a unique way of selling their catch. At sunrise, fresh fish is auctioned off in a rapid, rhythmic chant known as “pregão.” This tradition dates back to the 19th century, when auctioneers had to speak fast to keep up with the competitive market. Even today, visitors can experience this vibrant scene and bid for the freshest seafood!',
        url: require('../assets/img/F/2ea0fca007d112f44318ca139b641a34425b4e88.jpg'),
    },
    {
        title: 'Tribute to Sailors',
        desc: 'During the Tribute to Sailors, some locals write messages to lost loved ones or wishes for safe journeys and place them in bottles, casting them into the ocean. This heartfelt tradition is meant to connect the past with the present, keeping the memories of brave sailors alive. Some of these bottles have even washed up on distant shores, carrying Figueira’s stories across the world.',
        url: require('../assets/img/F/4b7607c9dfa6b67275a8d8949af8c0cb69d68c9d.jpg'),
    },
]
const VoteScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleVote = (index) => {
        setSelectedIndex(index);
        setTimeout(() => {
            setModalVisible(true);
        }, 1000);
    };

    return (
        <View style={{ backgroundColor: '#000', flex: 1, paddingTop: 80, padding: 24 }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 20,
                }}>
                <TouchableOpacity onPress={() => navigation.pop(2)}>
                    <RedBack />
                </TouchableOpacity>
            </View>

            <Text style={{ color: '#fff', fontSize: 20 }}>
                Which tradition do you like the most?
            </Text>

            {data.map((item, index) => (
                <View
                    key={index}
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 50,
                    }}>
                    <TouchableOpacity
                        onPress={() => handleVote(index)}
                        style={{
                            width: '82%',
                            padding: 20,
                            borderColor: selectedIndex === index ? '#00FF7F' : '#AC1430',
                            borderWidth: 5,
                            backgroundColor: selectedIndex === index ? '#00FF7F30' : 'transparent',
                            alignItems: 'center',
                            borderRadius: 99,
                        }}>
                        <Text style={{ color: '#fff', fontSize: 24 }}>{item.title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('VoteInfoScreen', { item })}>
                        <Info />
                    </TouchableOpacity>
                </View>
            ))}

            <Modal
                transparent
                animationType="fade"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={{
                        backgroundColor: '#fff',
                        borderRadius: 20,
                        padding: 30,
                        alignItems: 'center',
                    }}>
                        <Text style={{ fontSize: 20, color: '#000' }}>Thank you for voting!</Text>
                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                            style={{
                                marginTop: 20,
                                backgroundColor: '#AC1430',
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                borderRadius: 10,
                            }}>
                            <Text style={{ color: '#fff' }}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};


export default VoteScreen;
