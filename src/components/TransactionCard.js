import React from 'react';
import { View } from 'react-native';
import { Text, Card } from 'react-native-paper';
import styles from '../assets/components/TransactionCard';

export default function TransactionCard(props) {
  return (
    <Card key={props.id} style={styles.card}>
      <Card.Content>
        <View style={[styles.row, styles.cardContent]}>
          <Text style={styles.headerText}>{props.id}</Text>
          <Text style={styles.headerText}>{props.blockHeight}</Text>
        </View>

        <Text style={styles.primaryText}>
          {props.value}
          <Text style={styles.secondaryText}> BTC</Text>
        </Text>
      </Card.Content>
    </Card>
  );
}
