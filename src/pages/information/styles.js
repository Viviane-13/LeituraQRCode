import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FBFBFB',
  },
  buttonBack: {
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginTop: 15,
    width: 30,
    height: 30,
  },
  title: {
    fontWeight: 'bold',
    color: '#32BF84',
    fontSize: 25,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 220,
    marginTop: 50,
  },
  imagePet: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
  },
  containerInfo: {
    width: '80%',
    marginTop: 50,
    padding: 10,
  },
  viewInfo: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  infoTitle: {
    color: '#32BF84',
    fontSize: 18,
    fontWeight: '700',
  },
  infoResponse: {
    color: '#645F5F',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 5,
  },
  nameLogo: {
    marginTop: 200,
  },
});

export {styles};
