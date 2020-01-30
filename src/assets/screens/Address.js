import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#1a1b25',
    padding: 30,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#553b00',
  },
  iconText: {
    color: '#553b00',
    fontWeight: 'bold',
    fontSize: 18,
  },
  secondaryButtonText: {
    fontWeight: 'bold',
    color: '#553b00',
    fontSize: 10,
  },
  header: {
    color: '#63657F',
    fontWeight: 'bold',
    fontSize: 20,
  },
  primaryButtonText: {
    fontWeight: 'bold',
    color: '#3d2a00',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  primaryButtonContent: {
    height: 40,
  },
  primaryButton: {
    marginVertical: 20,
    backgroundColor: '#553b00',
  },
  disabledButton: {
    backgroundColor: '#505050',
    marginVertical: 20,
  },
  disabledButtonText: {
    backgroundColor: '#505050',
  },
  footerText: {
    textAlign: 'center',
    color: '#63657F',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default styles;
