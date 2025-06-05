import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Modal,
    StyleSheet,
    ScrollView,
} from 'react-native';
import RedBack from '../assets/svg/RedBack';

const questions = [
    {
        description:
            '“This is one of the oldest buildings in Figueira, deeply tied to its maritime history. Sailors used to come here before embarking on long voyages, and locals believed that this place could reveal their fate…”',
        options: [
            {
                image: require('../assets/img/q/17d9425fd9e45e77bd02f35cd158129fc0ccaecf.jpg'),
                isCorrect: true,
            },
            {
                image: require('../assets/img/q/9c9ddf3f4516401bd179ba197f2106fe5926b4ea.jpg'),
                isCorrect: false,
            },
            {
                image: require('../assets/img/q/0bc40e70cbaed03c1e9c1126aa830dfb84ea2482.jpg'),
                isCorrect: false,
            },
        ],
    },
    {
        description:
            '“This fortress was built to defend the city from pirates. Its massive walls have witnessed hundreds of naval battles, and its towers offer breathtaking views of the coastline…”',
        options: [
            {
                image: require('../assets/img/q/24f21010a41ec7bcf12fdbca629ef67e33a3850e.jpg'),
                isCorrect: false,
            },
            {
                image: require('../assets/img/q/59e147a9b3b6ee1ec5f5c336bdc15a8c33671e34.jpg'),
                isCorrect: false,
            },
            {
                image: require('../assets/img/q/82a695daa062f6fc37f38b5574bbb499e9e5fda8.jpg'),
                isCorrect: true,
            },
        ],
    },
    {
        description:'“This palace once hosted grand balls for noble guests. Its façade is adorned with intricate patterns, and inside, visitors can explore luxurious halls where music once played, and important deals were made…”',
        options: [
            {
                image: require('../assets/img/q/046118c208ea0f72372ea60622d979b7b2f818ed.jpg'),
                isCorrect: true,
            },
            {
                image: require('../assets/img/q/046118c208ea0f72372ea60622d979b7b2f818ed.jpg'),
                isCorrect: false,
            },
            {
                image: require('../assets/img/q/276294da9fe870460805e2e5d1d9de27bbb7b655.jpg'),
                isCorrect: false,
            },
        ],
    },
    {
        description:'“This place comes to life early in the morning: boats bring in their fresh catch, fishermen share stories of their voyages, and market stalls overflow with seafood delicacies…”',
        options: [
            {
                image: require('../assets/img/q/a27a309f9f78d6f2eafb278db1c67415d595eecf.jpg'),
                isCorrect: false,
            },
            {
                image: require('../assets/img/q/a9382126a32db3c21c32329c1c8af8556ded1aec.jpg'),
                isCorrect: false,
            },
            {
                image: require('../assets/img/q/b1d9c81a62da15009a7c50956596a097c4d06108.jpg'),
                isCorrect: true,
            },
        ],
    },
    {
        description:'“This tall tower, now a symbol of the city, offers an incredible panoramic view of the ocean. Its construction in the 20th century sparked controversy, but today, it is one of the most recognizable landmarks in Figueira…”',
        options: [
            {
                image: require('../assets/img/q/b3a4f91a4f8130c1bba30b0ea80e9becf7f72331.jpg'),
                isCorrect: true,
            },
            {
                image: require('../assets/img/q/bcec07b87bc6f21b7bacabfdb2e298499bc542b6.jpg'),
                isCorrect: false,
            },
            {
                image: require('../assets/img/q/dd730a00df68e1ad1ba1a2f467c0a413e15da528.jpg'),
                isCorrect: false,
            },
        ],
    },
];

const GameProccessScreen = ({ navigation }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selected, setSelected] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleSelect = (index) => {
        const option = questions[currentQuestion].options[index];
        setSelected(index);

        if (option.isCorrect) {
            setTimeout(() => {
                setSelected(null);
                if (currentQuestion + 1 < questions.length) {
                    setCurrentQuestion(currentQuestion + 1);
                } else {
                    navigation.navigate('SecretUnfoScreen')
                }
            }, 1000);
        } else {
            setTimeout(() => {
                setShowModal(true);
            }, 500);
        }
    };

    const handleRestart = () => {
        setShowModal(false);
        setCurrentQuestion(0);
        setSelected(null);
    };

    const question = questions[currentQuestion];

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <RedBack />
            </TouchableOpacity>

            <ScrollView style={{ marginTop: 20 }}>
                <Text style={styles.title}>🔍 Description:</Text>
                <Text style={styles.description}>{question.description}</Text>

                <View>
                    <View style={styles.imageGrid}>
                        {question.options.slice(0, 2).map((opt, index) => {
                            const borderColor =
                                selected === null
                                    ? 'transparent'
                                    : opt.isCorrect
                                        ? '#00FF70'
                                        : selected === index
                                            ? '#FF3A44'
                                            : 'transparent';

                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => handleSelect(index)}
                                    disabled={selected !== null}
                                    style={[
                                        styles.imageWrapper,
                                        { borderColor: borderColor, borderWidth: 3 },
                                    ]}
                                >
                                    <Image
                                        source={opt.image }
                                        style={styles.image}
                                        resizeMode="cover"
                                    />
                                </TouchableOpacity>
                            );
                        })}
                    </View>

                    {/* Третья картинка по центру снизу */}
                    {question.options[2] && (
                        <View style={styles.centeredWrapper}>
                            <TouchableOpacity
                                onPress={() => handleSelect(2)}
                                disabled={selected !== null}
                                style={[
                                    styles.imageWrapper,
                                    styles.singleCenteredImage,
                                    {
                                        borderColor:
                                            selected === null
                                                ? 'transparent'
                                                : question.options[2].isCorrect
                                                    ? '#00FF70'
                                                    : selected === 2
                                                        ? '#FF3A44'
                                                        : 'transparent',
                                        borderWidth: 3,
                                    },
                                ]}
                            >
                                <Image
                                    source={question.options[2].image }
                                    style={styles.image}
                                    resizeMode="cover"
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                </View>

            </ScrollView>

            <Modal visible={showModal} transparent animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={{ color: 'white', fontSize: 18, marginBottom: 16 }}>
                            ❌ You lost! Try again?
                        </Text>
                        <TouchableOpacity style={styles.retryButton} onPress={handleRestart}>
                            <Text style={{ color: 'white' }}>🔁 Restart</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.retryButton, { marginTop: 10, backgroundColor: '#444' }]}
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={{ color: 'white' }}>⬅️ Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default GameProccessScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 80,
        padding: 24,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
    },
    centeredWrapper: {
        alignItems: 'center',
    },

    imageWrapper: {
        width: '48%',
        height: 160,
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 20,
    },

    singleCenteredImage: {
        width: '70%', // можешь подстроить под свой дизайн
    },
    description: {
        color: '#ccc',
        fontStyle: 'italic',
        fontSize: 16,
        marginBottom: 16,
    },
    imageGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#000000aa',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#222',
        padding: 24,
        borderRadius: 20,
        alignItems: 'center',
        width: '80%',
    },
    retryButton: {
        backgroundColor: '#AC1430',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
});
