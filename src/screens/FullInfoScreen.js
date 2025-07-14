import {Alert, ImageBackground, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Save from '../assets/svg/Save';
import BlackNaiskos from '../assets/svg/BlackNaiskos';
import RedBack from '../assets/svg/RedBack';
import DownArrow from '../assets/svg/DownArrow';
import {addFact} from '../redux/slices/savedFactsSlice';
import {useDispatch} from 'react-redux';

const FullInfoScreen = ({navigation, route}) => {
    const {item} = route.params;
    const dispatch = useDispatch();

    const handleSaveFact = () => {
        dispatch(addFact(item));
        Alert.alert('Successfully', 'Fact successfully added to saved');
        navigation.goBack();
    };

    return (
        <ScrollView style={{backgroundColor:'#000',  paddingTop: 80, padding: 24}}>
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
                source={item.url }
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
                {item.full}
            </Text>

        </ScrollView>
    )
}

export default FullInfoScreen
