import {
    Alert,
    ImageBackground,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';
import Save from '../assets/svg/Save';
import BlackNaiskos from '../assets/svg/BlackNaiskos';
import RedBack from '../assets/svg/RedBack';
import DownArrow from '../assets/svg/DownArrow';
import {useDispatch, useSelector} from 'react-redux';
import {removeFact} from '../redux/slices/savedFactsSlice';
import Cross from '../assets/svg/Cross';

const SavedStoriesScreen = ({navigation}) => {
    const savedFacts = useSelector(state => state.savedFacts.facts);
    const dispatch = useDispatch();
    console.log('savedFacts: ', savedFacts);
    const handleRemoveFact = (id) => {
        dispatch(removeFact(id));
        Alert.alert('Deleted', 'Fact removed from saved');
    };

    return (
        <View style={{backgroundColor: '#000', flex: 1, paddingTop: 80, padding: 24}}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 20,
                }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <RedBack />
                </TouchableOpacity>

                <View>
                    <Text style={{color: '#FFFFFF', fontSize: 36}}>Saved</Text>
                    <Text style={{color: '#AC1430', fontSize: 36}}>of Figueira</Text>
                </View>
            </View>

            {savedFacts.length === 0 ? (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#AC1430', fontSize: 20, textAlign: 'center'}}>
                        You don't have any saved facts yet.
                    </Text>
                </View>
            ) : (
                <ScrollView showsVerticalScrollIndicator={false}>
                    {savedFacts.map((item, index) => (
                        <View
                            key={item.id}
                            style={{
                                marginBottom: 24,
                                borderBottomWidth: 2,
                                borderBottomColor: '#AC1430',
                                paddingBottom: 16,
                            }}>
                            <Text style={{color: '#AC1430', fontSize: 28, marginBottom: 10}}>
                                {item.title}
                            </Text>

                            {/*<ImageBackground*/}
                            {/*    source={{uri: item.url}}*/}
                            {/*    resizeMode="cover"*/}
                            {/*    imageStyle={{borderRadius: 20}}*/}
                            {/*    style={{*/}
                            {/*        height: 240,*/}
                            {/*        marginBottom: 16,*/}
                            {/*        padding: 20,*/}
                            {/*    }}>*/}
                                <TouchableOpacity
                                    onPress={() => handleRemoveFact(item.id)}
                                    style={{
                                        position: 'absolute',
                                        bottom: -70,
                                        right: -10,
                                        padding: 20,
                                        borderRadius: 50,
                                        borderBottomRightRadius: 0,
                                        backgroundColor: '#AC1430',
                                    }}>
                                    <Cross />
                                </TouchableOpacity>
                            {/*</ImageBackground>*/}

                            <Text style={{color: '#fff', fontSize: 18}}>{item.full}</Text>
                        </View>
                    ))}
                </ScrollView>
            )}
        </View>
    );
};

export default SavedStoriesScreen;
