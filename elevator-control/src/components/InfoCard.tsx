import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type InfoCardProps = {
  label: string;
  value: string | number;
  subLabel?: string;
  valueColor?: string;
};

export default function InfoCard({ label, value, subLabel, valueColor = '#ff007f' }: InfoCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, { color: valueColor }]}>{value}</Text>
      {subLabel && <Text style={styles.subLabel}>{subLabel}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { 
    backgroundColor: '#1e1e1e', 
    padding: 20, 
    borderRadius: 12, 
    marginBottom: 15,
    alignItems: 'center' // Centraliza o conteúdo 
  },
  label: { 
    color: '#888', 
    fontSize: 14, 
    marginBottom: 5,
    textAlign: 'center'
  },
  value: { 
    fontSize: 32, 
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subLabel: { 
    color: '#666', 
    fontSize: 12, 
    marginTop: 5,
    textAlign: 'center'
  }
});