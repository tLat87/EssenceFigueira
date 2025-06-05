import {Alert, ImageBackground, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import RedBack from '../assets/svg/RedBack';
import DownArrow from '../assets/svg/DownArrow';
import {useDispatch} from 'react-redux';
import {addFact} from '../redux/slices/savedFactsSlice';

const data = [
    {
        id: 5,
        title: 'Founding of Figueira',
        desc: 'Figueira was founded in the 12th century as a small fishing settlement located in a strategically important position along the Atlantic Ocean coastline. This settlement served as a crucial point for maritime trade and became a key link in the chain of ports connecting Europe with Africa. The residents of Figueira were heavily involved in fishing, and this became the foundation for the city’s future economic prosperity. Its location along an important trade route made it ideal for strategic defensive constructions.',
        url: require('../assets/img/F/4b7607c9dfa6b67275a8d8949af8c0cb69d68c9d.jpg'),
    },
    {
        id: 6,
        title: 'Construction of Figueira Castle',
        desc: 'In the 13th century, as the city’s importance grew, a castle was built on a hill by the coast. The Figueira Castle became not only a symbol of strength and authority but also an essential defensive fortress protecting the city from pirate attacks and invaders. The castle played a key role in the historical development of the region, ensuring the safety of trade and serving as the center of administrative power. Surrounded by walls and towers, the castle became a strategic object for the city’s defense.',
        url:    require('../assets/img/F/4b7607c9dfa6b67275a8d8949af8c0cb69d68c9d.jpg'),
    },
    {
        id: 7,
        title: 'Naval Battle Off the Coast of Figueira',
        desc: 'The year 1580 was one of the most significant for Figueira. During this time, a major naval battle took place off its coast, where the city witnessed the clash of two powerful naval fleets. This battle solidified Figueira’s strategic importance as a key port for maritime trade and defense. At the time, naval battles were not only military confrontations but also displays of power and influence in the region. The victory in this battle secured Figueira’s status as a vital port city along the Atlantic coast.',
        url:    require('../assets/img/F/0e448be1389c0c94719c356f678c736337d237c0.jpg'),
    },
    {
        id: 8,
        title: 'Construction of the Church of St. Mary',
        desc: 'In the 16th century, Figueira underwent a period of cultural and architectural flourishing. During this time, the Church of St. Mary was built — one of the most striking architectural landmarks of the city. The church became a symbol of religious and cultural life in Figueira, representing the city’s growth and development. Its majestic architectural forms and unique interior elements attracted the attention not only of locals but also of travelers, which further contributed to the increase in the number of visitors to the city. The church remained an important religious and cultural center for Figueira for centuries.',
        url:    require('../assets/img/F/Subtract-2.png'),
    },
    {
        id: 9,
        title: 'Development of the City as a Tourist Center',
        desc: 'In the 19th century, Figueira began transforming into a popular tourist center, attracting European travelers seeking relaxation along its scenic coast. With its natural beauty, calm beaches, and historic landmarks, Figueira became known as one of the best resorts for holidaymakers. During this period, a number of hotels and resort complexes were built, which helped improve the city’s infrastructure and quality of life. Tourism became the primary source of income for the city, and its development continued into the following decades.',
        url:    require('../assets/img/F/0e448be1389c0c94719c356f678c736337d237c0.jpg'),
    },
    {
        id: 10,
        title: 'Restoration of the Historic City Center',
        desc: 'In the early 20th century, active restoration of Figueira’s historic buildings began. This was an important step in preserving the city’s architectural heritage. The restoration work covered both the ancient buildings in the city center and other cultural monuments that needed protection from time and natural damage. During this period, significant attention was given to the restoration of old squares and streets, which made Figueira even more attractive to tourists and historians.',
        url:    require('../assets/img/F/Subtract-2.png'),
    },
]

const RandomFactScreen = ({navigation}) => {

    const [item, setItem] = useState({})

    const dispatch = useDispatch();

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setItem(data[randomIndex]);
    }, [])

    const handleSaveFact = () => {
        dispatch(addFact(item));
        Alert.alert('Successfully', 'Fact successfully added to saved');
        navigation.goBack();
    };

    return (
        <View style={{backgroundColor:'#000', flex: 1, paddingTop: 80, padding: 24}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <RedBack/>
                </TouchableOpacity>
                <View style={{}}>
                    <Text style={{color:'#AC1430', fontSize: 36}}>
                        {item.title}
                    </Text>
                </View>
            </View>
            <ImageBackground
                source={ item.url }
                resizeMode="cover"
                imageStyle={{ borderRadius: 20 }}
                style={{
                    marginBottom: 20,
                    // width: '100%',
                    // borderRadius: 20,
                    height: 240,
                    padding: 20,
                    // overflow: 'hidden',
                }}
            >
                <TouchableOpacity
                    onPress={handleSaveFact}
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
            <Text style={{color:'#fff', fontSize: 18}}>
                {item.desc}
            </Text>
        </View>
    )
}

export default RandomFactScreen
