import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {styles} from './styles';

const Information = ({navigation, route}) => {
  const pageHome = () => {
    navigation.navigate('Home');
  };

  let dadosLeitura = JSON.parse(route.params.leitura);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => pageHome()} style={styles.buttonBack}>
        <Image
          resizeMode="contain"
          style={{width: 30, height: 30}}
          source={require('../../assets/back.png')}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Informações</Text>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          source={{uri: dadosLeitura.image}}
          style={styles.imagePet}
        />
      </View>
      <View style={styles.containerInfo}>
        <View style={styles.viewInfo}>
          <Text style={styles.infoTitle}>Nome:</Text>
          <Text style={styles.infoResponse}>{dadosLeitura.name}</Text>
        </View>
        <View style={styles.viewInfo}>
          <Text style={styles.infoTitle}>Data Nascimento:</Text>
          <Text style={styles.infoResponse}>{dadosLeitura.dtNasc}</Text>
        </View>
        <View style={styles.viewInfo}>
          <Text style={styles.infoTitle}>Tutor:</Text>
          <Text style={styles.infoResponse}>{dadosLeitura.tutor}</Text>
        </View>
      </View>
      <View style={styles.nameLogo}>
        <Text style={{color: '#32BF84', fontSize: 28, fontWeight: 'bold'}}>
          PetLife
        </Text>
      </View>
    </View>
  );
};

export default Information;
