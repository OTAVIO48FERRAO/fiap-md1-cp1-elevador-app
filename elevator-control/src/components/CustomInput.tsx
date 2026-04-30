import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

interface Props {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

export const CustomInput = ({ label, ...props }: Props) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput 
      style={styles.input} 
      placeholderTextColor="#666" 
      {...props} 
    />
  </View>
);

const styles = StyleSheet.create({
  container: { marginBottom: 20, width: '100%' },
  label: { color: '#ff007f', marginBottom: 8, fontWeight: 'bold' },
  input: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
  },
});