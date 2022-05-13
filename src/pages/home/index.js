import React from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const Home = ({ navigation }) => {
  const pageInformation = () => {
    navigation.navigate('Information');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#32BF84" />
      <Text style={styles.title}>PetLife</Text>
      <View style={styles.qrCodeContainer}>
        <Image
          source={require('../../assets/qrcode.png')}
          resizeMode="contain"
          style={styles.qrCodeImage}
        />
      </View>
      <TouchableOpacity
        onPress={() => pageInformation()}
        activeOpacity={0.4}
        style={styles.qrCodeButton}
      >
        <Text style={styles.qrCodeButtonText}>Ler QRCODE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
