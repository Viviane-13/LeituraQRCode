import React from 'react';

import {View, Image, StatusBar, Linking} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

import Maker from '../../assets/marker.png';

import {styles} from './styles';

export default function Camera({navigation}) {
  const onReadQR = value => {
    let dadosLeitura = value.data;

    console.log('Dados Leitura: ', dadosLeitura, typeof dadosLeitura);

    navigation.navigate('Information', {
      leituraObject: {
        leitura: dadosLeitura,
      },
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'#000000'}
        translucent={false}
      />
      <QRCodeScanner
        cameraType="back"
        checkAndroid6Permissions
        showMarker
        customMarker={
          <Image
            resizeMode="contain"
            style={styles.cameraMarker}
            source={Maker}
          />
        }
        onRead={onReadQR}
      />
    </View>
  );
}
