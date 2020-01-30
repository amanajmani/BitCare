import React from 'react';
import { View } from 'react-native';
import { Text, Card } from 'react-native-paper';
import styles from '../assets/components/NoTransactionsCard';
import Icon from 'react-native-vector-icons/Ionicons';

export default function NoTransactionsCard(props) {
  return (
    <Card key={props.hash} style={styles.card}>
      <Card.Content>
        <View style={styles.row}>
          <Icon name="md-sad" size={35} style={styles.icon} />
          <Text style={styles.text}>
            You don't have any unspent transactions
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
}
