import React from 'react';

import {View, StyleSheet, Linking, Image, StatusBar} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

import {styles} from './styles';

export default function Camera({navigation, route}) {
  onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };

  const {view, textHeaderInfo, textInfor} = route.params;
  console.log(route);

  const onReadQR = value => {
    //console.log("Vendo dados do e: ", value.data);
    let dadosLeitura = value.data;
    //

    const leituraTeste = JSON.stringify(value.data);
    console.log('Dados Leitura', typeof dadosLeitura);

    //let teste1 = JSON.parse(leituraTeste);

    //console.log("Sem stringFy", dadosLeitura);
    //console.log("Teste.....", JSON.parse(leituraTeste));
    //console.log("huuum...", teste1.pessoa);

    //let

    navigation.navigate('Information');
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
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
            source={require('../../assets/marker.png')}
          />
        }
        onRead={onReadQR}
      />
    </View>
  );
}
