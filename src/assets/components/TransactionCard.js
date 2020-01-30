import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#222431',
    borderRadius: 15,
    marginVertical: 4,
  },
  cardContent: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
  },
  headerText: {
    color: '#63657F',
    fontWeight: 'bold',
    fontSize: 10,
  },
  primaryText: {
    color: '#7c7c7f',
    fontWeight: 'bold',
  },
  secondaryText: {
    color: '#63657F',
    fontWeight: 'bold',
    fontSize: 10,
    marginTop: 4,
  },
});

export default styles;
