import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.text}>
          New Society is a forward-thinking organization dedicated to fostering innovation
          and community engagement. We believe in creating meaningful connections and
          driving positive change in our community.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Our Mission</Text>
        <Text style={styles.text}>
          To create a collaborative platform where ideas flourish and communities thrive.
          We're committed to sustainable development, social innovation, and inclusive
          growth for all members of our society.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Our Values</Text>
        <Text style={styles.text}>
          • Innovation
          • Community
          • Sustainability
          • Inclusivity
          • Collaboration
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  section: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
});