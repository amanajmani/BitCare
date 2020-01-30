import React from 'react';
import { Text, Card } from 'react-native-paper';
import styles from '../assets/components/BitcoinCard';

export default function BitcoinCard(props) {
  return (
    <Card style={styles.card}>
      <Card.Title
        title="B I T C O I N"
        subtitle={props.address}
        titleStyle={styles.header}
        subtitleStyle={styles.subText}
      />
      <Card.Content style={styles.cardContent}>
        <Text style={styles.subText}>
          {props.balance == null ? 0 : props.balance}
          <Text style={styles.footerSubText}> BTC</Text>
        </Text>
        <Text style={styles.footerText}>Unspent Balance</Text>
      </Card.Content>
    </Card>
  );
}
