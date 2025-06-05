import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Save from '../assets/svg/Save';
import BlackNaiskos from '../assets/svg/BlackNaiskos';
import Vote from '../assets/svg/Vote';

const data = [
    {
        id: 1,
        full:"Fandango is one of Portugal’s most famous dances, popular among fishermen and traders. It is performed in pairs to the accompaniment of guitars and castanets, symbolizing joy, freedom, and community spirit.",
        desc: 'An energetic folk dance with castanets, combining lively rhythms with graceful movements.',
        title: "Fandango\n" +
            "Dance",
        url: require('../assets/img/F/Subtract-2.png'),
    },
    {
        id: 2,
        full:"Every June, the people of Figueira celebrate the Feast of Saint John. The city fills with glowing lanterns, street performances, and fireworks. People jump over bonfires for good luck and exchange garlic bulbs as a symbol of protection against evil spirits.",
        desc: 'A summer festival with bonfires, lanterns, and street celebrations.',
        title: "Feast of \n" +
            "Saint John",
        url: require('../assets/img/F/0e448be1389c0c94719c356f678c736337d237c0.jpg'),
    },
    {
        id: 3,
        full:"Figueira is famous for its fishing traditions. At this market, visitors can taste the freshest seafood, learn traditional cooking secrets, and even take part in an impromptu contest for the best fish stew.",
        desc: 'A marketplace where fresh fish is sold, along with live cooking demonstrations.',
        title: "Fishermen’s \n" +
            "Market",
        url: require('../assets/img/F/def7f49eb81d2fea11b73f991d00daf7ce1b8702.jpg'),
    },
    {
        id: 4,
        full:"Every year, the people of Figueira gather by the shore to pay tribute to those who dedicated their lives to the sea. Wreaths of flowers are cast into the ocean, and elders share legends of maritime heroes.",
        desc: 'A solemn ceremony honoring sailors who set out to sea.',
        title: "Tribute to \n" +
            "Sailors",
        url: require('../assets/img/F/ba58a55430679ec2733c828b020a472a84a3d216.jpg'),
    },
]

const secondScreen = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleSelection = (item) => {
        setModalVisible(true);
        setTimeout(() => {
            setModalVisible(false);
            navigation.goBack();
        }, 2000); // Закрытие модалки и возврат через 2 сек
    };
    return (
        <ScrollView style={{backgroundColor:'#000', flex: 1, paddingTop: 80, padding: 24}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
                <View style={{}}>
                    <Text style={{color: '#FFFFFF', fontSize: 36}}>
                        Traditions
                    </Text>
                    <Text style={{color:'#AC1430', fontSize: 36}}>
                        of Figueira
                    </Text>
                </View>
                <TouchableOpacity style={{}} onPress={() => {navigation.navigate('VoteScreen')}}>
                    <Vote/>
                </TouchableOpacity>
            </View>

            {data.map((item, index) => (
                <View style={{backgroundColor:'#CABA71',marginBottom: 20, width:'100%', borderRadius: 20, padding:20}}>
                    <Text style={{ fontSize: 16,
                        color: '#000',
                        textAlign: 'center',
                        // paddingHorizontal: 20,
                        marginBottom: 30}}>{item.desc}</Text>
                    <Text style={{ fontSize: 24,
                        fontWeight: 'bold',
                        color: '#000',
                        textAlign: 'center',
                        width: '80%',
                    }}>{item.title}</Text>
                    <TouchableOpacity onPress={()=>{navigation.navigate('FullInfoScreen', {item})}} style={{position: 'absolute', bottom: -10,  right: -10, padding: 20, borderRadius: 50, borderBottomRightRadius: 0, backgroundColor:'#FFE6A3'}}>
                        <BlackNaiskos/>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    )
}

export default secondScreen
