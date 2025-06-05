import {
    Alert,
    Dimensions,
    FlatList,
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Save from '../assets/svg/Save';
import BlackNaiskos from '../assets/svg/BlackNaiskos';
import RedBack from '../assets/svg/RedBack';
import DownArrow from '../assets/svg/DownArrow';
import {addFact} from '../redux/slices/savedFactsSlice';
import {useDispatch} from 'react-redux';

const data = [
    {
        id: 12,
        title: 'From Fishing Village to Trade Center',
        desc: 'The first mentions of Figueira date back to the Middle Ages, when a small settlement of fishermen and salt makers was located here. Its position by the Mondego River allowed the town to become a trade hub. In the 16th and 17th centuries, the port began receiving ships from Africa and the Americas, bringing exotic goods. This transformed Figueira into a bustling trade center connected to the great maritime routes.',
        url: require('../assets/img/c8a3be94d064ff79f34008781c8d5e129283dfad.jpg'),
    },
    {
        id: 13,
        title: 'Cultural Flourishing and Maritime Heritage',
        desc: 'The 18th and 19th centuries were a time of cultural growth. The city saw the opening of theaters, the hosting of music festivals, and artists drawing inspiration from coastal landscapes. However, the sea was not only a source of wealth but also of legends: locals told stories of sunken ships and mysterious lights on the water, passing these tales from generation to generation.',
        url: require('../assets/img/F/f56d08979cfb24df2253d05a1ddf67a16d492f20.jpg'),
    },
    {
        id: 14,
        title: 'Urban Transformation and New Eras',
        desc: 'With the arrival of the 19th century, Figueira changed: wide promenades, squares, and elegant mansions were built. The construction of the railway connected the city with Lisbon and Porto, leading to an influx of tourists and infrastructure development. Despite modernization, Figueira preserved its historical charm.',
        url: require('../assets/img/Subtract.png'),
    },
    {
        id: 15,
        title: 'Challenges of the 20th Century',
        desc: 'The 20th century brought challenges: world wars, economic crises, and industrialization impacted the city’s life. However, thanks to its strategic location, Figueira maintained its importance. Industry and tourism developed in parallel, helping the city adapt to new realities.',
        url: require('../assets/img/6ef08af89eab5dc51a790dd26aaa4164a47bde5d.jpg'),
    },
    {
        id: 16,
        title: 'Figueira Today Tradition and Future',
        desc: 'Today, Figueira is a place where traditional fishing boats coexist with modern yachts, and ancient traditions intertwine with innovations. The city continues to attract travelers with its sandy beaches, cultural events, and unique atmosphere that merges past and future.',
        url: require('../assets/img/2421ccd39b264193b214346008e09f3dbd822e83.jpg'),
    },
]

const {width} = Dimensions.get('window');

const TimeLineScreen = ({navigation}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef(null);
    const dispatch = useDispatch();
    const onScroll = (event) => {
        const index = Math.round(
            event.nativeEvent.contentOffset.x / Dimensions.get('window').width,
        );
        setActiveIndex(index);
    };

    const handleSaveFact = () => {
        dispatch(addFact(data[activeIndex]));
        Alert.alert('Successfully', 'Fact successfully added to saved');
        navigation.goBack();
    };

    const renderItem = ({item}) => (
        <View style={styles.card}>
            <Image source={item.url} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 20,
                    marginLeft: 20,
                }}
            >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <RedBack />
                </TouchableOpacity>

            </View>
            <View style={styles.timeline}>
                {data.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.indicator,
                            {backgroundColor: activeIndex === index ? '#fff' : '#000'},
                        ]}
                    />
                ))}
            </View>

            {/* Горизонтальный скролл карточек */}
            <FlatList
                ref={flatListRef}
                data={data}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, index) => index.toString()}
                renderItem={renderItem}
                onScroll={onScroll}
                scrollEventThrottle={16}
            />
        </View>
    );
};

export default TimeLineScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 80,
    },
    timeline: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        padding: 10,
        width: '100%',
        backgroundColor: '#AC1430',
    },
    indicator: {
        width: 3,
        height: 16,
        borderRadius: 8,
        backgroundColor: '#000',
        marginHorizontal: 6,
    },
    card: {
        width: width,
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    image: {
        width: width - 48,
        height: 300,
        borderRadius: 16,
        marginBottom: 16,
    },
    title: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 8,
    },
    desc: {
        color: '#ccc',
        fontSize: 16,
        textAlign: 'center',
    },
});
