import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import BlackNaiskos from '../assets/svg/BlackNaiskos';

const slides = [
    {
        title: 'Explore the History of Figueira',
        description: 'Discover the rich heritage of the city! Learn about key historical moments, events, and figures that shaped the modern face of Figueira. Every corner holds a unique story.',
    },
    {
        title: 'Feel the Spirit of the Culture',
        description: 'Immerse yourself in the unique traditions of Figueira! Learn about local festivals, customs, and cultural rituals that live in the hearts of its people. Participate in votes and discover random traditions every day!',
    },
    {
        title: 'Uncover the City’s Past',
        description: 'Take part in engaging quizzes to test your knowledge about Figueira’s legendary locations. Each correct answer unlocks new layers of history and facts, helping you get to know the city better.',
    },
];

const WelcomeScreen = ({ navigation }) => {
    const [step, setStep] = useState(0);

    const handleNext = () => {
        if (step < slides.length - 1) {
            setStep(step + 1);
        } else {
            navigation.navigate('MainTab');
        }
    };

    return (
        <View style={styles.container}>

            <Image source={require('../assets/img/Vector.png')} />
            <View style={{}}>
                <Text style={{color: '#FFFFFF', fontSize: 48}}>
                    The Essence
                </Text>
                <Text style={{color:'#AC1430', fontSize: 48}}>
                    of Figueira
                </Text>
            </View>

            <View style={{backgroundColor:'#CABA71', width:'100%', borderRadius: 20, padding:20}}>
                <Text style={styles.description}>{slides[step].description}</Text>
                <Text style={styles.title}>{slides[step].title}</Text>
                <TouchableOpacity onPress={handleNext} style={{position: 'absolute', bottom: -10,  right: -10, padding: 20, borderRadius: 50, borderBottomRightRadius: 0, backgroundColor:'#FFE6A3'}}>
                    <BlackNaiskos/>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#04050E',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 40,
        paddingHorizontal: 24
    },
    image: {},
    indicatorRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    indicatorActive: {
        width: 60,
        height: 18,
        backgroundColor: '#B80041',
        borderRadius: 5,
    },
    indicatorInactive: {
        width: 60,
        height: 18,
        backgroundColor: '#80334a',
        borderRadius: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        width: '80%',
        // marginBottom: 16,
        // paddingHorizontal: 20,
    },
    description: {
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
        // paddingHorizontal: 20,
        marginBottom: 30
    },
    button: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 6,
    },
    buttonText: {
        fontSize: 20,
        color: '#000',
    },
});

export default WelcomeScreen;
