import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const updates = [
  {
    id: '1',
    title: 'New Community Initiative',
    date: 'January 10, 2025',
    description: 'Launching our new community outreach program next month.',
  },
  {
    id: '2',
    title: 'Upcoming Workshop Series',
    date: 'January 15, 2025',
    description: 'Join us for a series of workshops on sustainable living.',
  },
  {
    id: '3',
    title: 'Partnership Program',
    date: 'January 20, 2025',
    description: 'New partnership opportunities opening for local organizations.',
  },
];

export default function UpdatesScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDate}>{item.date}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={updates}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  list: {
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardDate: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
  },
});