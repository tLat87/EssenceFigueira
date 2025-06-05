import { Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Save from '../assets/svg/Save';
import BlackNaiskos from '../assets/svg/BlackNaiskos';

const thirdScreen = ({navigation}) => {
    // State to track which button is selected
    const [selectedButton, setSelectedButton] = useState('history');

    return (
      <View
        style={{backgroundColor: '#000', flex: 1, paddingTop: 80, padding: 24}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{}}>
            <Text style={{color: '#FFFFFF', fontSize: 36}}>The History</Text>
            <Text style={{color: '#AC1430', fontSize: 36}}>of Figueira</Text>
          </View>
            <TouchableOpacity onPress={() => navigation.navigate('SavedStotiesScreen')}>
                <Save/>
            </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
            marginTop: 50,
          }}>
          <TouchableOpacity
            style={[
              {
                backgroundColor: '#AC1430',
                padding: 16,
                width: '48%',
                borderRadius: 90,
                alignItems: 'center',
              },
              {backgroundColor: selectedButton === 'history' ? '#AC1430' : 'gray'},
            ]}
            onPress={() => setSelectedButton('history')}>
            <Text style={{color: '#FFFFFF', fontSize: 16}}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{
              backgroundColor: '#FFFFFF',
              padding: 16,
              width: '48%',
              borderRadius: 90,
              alignItems: 'center',
            },
                {backgroundColor: selectedButton === 'timeline' ? '#AC1430' : 'gray'},]}
            onPress={() => setSelectedButton('timeline')}>
            <Text style={{color: '#000', fontSize: 16}}>Timeline</Text>
          </TouchableOpacity>
        </View>

        {/* Conditionally render content based on selected button */}
        <View style={{marginTop: 30}}>
          {selectedButton === 'history' ? (
            <View
              style={{
                backgroundColor: '#CABA71',
                width: '100%',
                borderRadius: 20,
                padding: 20,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#000',
                  textAlign: 'center',
                  width: '80%',
                  marginBottom: 20,
                }}>
                Explore the key historical events, cultural landmarks, and
                milestones of Figueira through engaging timelines and images.
                Dive into the city’s past and uncover its heritage.
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  color: '#000',
                  textAlign: 'center',
                  width: '80%',
                }}>
                A random historical fact of these times
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('RandomFactScreen');
                }}
                style={{
                  position: 'absolute',
                  bottom: -10,
                  right: -10,
                  padding: 20,
                  borderRadius: 50,
                  borderBottomRightRadius: 0,
                  backgroundColor: '#FFE6A3',
                }}>
                <BlackNaiskos />
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={{
                backgroundColor: '#CABA71',
                width: '100%',
                borderRadius: 20,
                padding: 20,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#000',
                  textAlign: 'center',
                  width: '80%',
                  marginBottom: 20,
                }}>
                Explore the key historical events, cultural landmarks, and
                milestones of Figueira through engaging timelines and images.
                Dive into the city’s past and uncover its heritage.
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  color: '#000',
                  textAlign: 'center',
                  width: '80%',
                }}>
                View history using Timeline
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('TimeLineScreen');
                }}
                style={{
                  position: 'absolute',
                  bottom: -10,
                  right: -10,
                  padding: 20,
                  borderRadius: 50,
                  borderBottomRightRadius: 0,
                  backgroundColor: '#FFE6A3',
                }}>
                <BlackNaiskos />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
};

export default thirdScreen;
