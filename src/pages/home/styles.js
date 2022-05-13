import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FBFBFB',
  },
  title: {
    fontWeight: 'bold',
    color: '#32BF84',
    fontSize: 28,
    marginTop: 50,
  },
  qrCodeContainer: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '60%',
    height: 200,
    marginTop: 120,
    elevation: 3,
  },
  qrCodeImage: {
    height: '80%',
  },
  qrCodeButton: {
    backgroundColor: '#32BF84',
    width: '60%',
    marginTop: 90,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 25,
  },
  qrCodeButtonText: {
    color: '#FEFEFE',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export {styles};
