import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function ContactScreen() {
  const handleEmail = () => {
    Linking.openURL('mailto:contact@newsociety.org');
  };

  const handlePhone = () => {
    Linking.openURL('tel:+15551234567');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.text}>
          We'd love to hear from you! Reach out to us through any of the following methods:
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleEmail}>
          <Text style={styles.buttonText}>Email Us</Text>
          <Text style={styles.contactDetail}>contact@newsociety.org</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handlePhone}>
          <Text style={styles.buttonText}>Call Us</Text>
          <Text style={styles.contactDetail}>(555) 123-4567</Text>
        </TouchableOpacity>

        <View style={styles.addressContainer}>
          <Text style={styles.buttonText}>Visit Us</Text>
          <Text style={styles.contactDetail}>
            123 Innovation Street
            {"\n"}
            Digital City, DC 12345
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  card: {
    backgroundColor: '#fff',
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  contactDetail: {
    fontSize: 16,
    color: '#666',
  },
  addressContainer: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
  },
});