import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Save from '../assets/svg/Save';
import BlackNaiskos from '../assets/svg/BlackNaiskos';

const HomeScreen = ({navigation}) => {
    return (
        <ScrollView style={{backgroundColor:'#000', flex: 1, paddingTop: 80, padding: 24}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
                <View style={{}}>
                    <Text style={{color: '#FFFFFF', fontSize: 36}}>
                        Footsteps
                    </Text>
                    <Text style={{color:'#AC1430', fontSize: 36}}>
                        of Figueira
                    </Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('SavedStotiesScreen')}>
                    <Save/>
                </TouchableOpacity>
            </View>

                <View style={{backgroundColor:'#CABA71',marginBottom: 20, width:'100%', borderRadius: 20, padding:20}}>
                    <Text style={{ fontSize: 16,
                        color: '#000',
                        textAlign: 'center',
                        // paddingHorizontal: 20,
                        marginBottom: 30}}>Uncover the city’s hidden past and explore its iconic landmarks. Read the clues, test your knowledge, and match each story to its true location!</Text>
                    <Text style={{ fontSize: 24,
                        fontWeight: 'bold',
                        color: '#000',
                        textAlign: 'center',
                        width: '80%',
                    }}>Step into Figueira’s forgotten
                        landmarks!</Text>
                    <TouchableOpacity onPress={()=>{navigation.navigate('GameProccessScreen')}} style={{position: 'absolute', bottom: -10,  right: -10, padding: 20, borderRadius: 50, borderBottomRightRadius: 0, backgroundColor:'#FFE6A3'}}>
                        <BlackNaiskos/>
                    </TouchableOpacity>
                </View>

        </ScrollView>
    )
}

export default HomeScreen
