import { View, Text, StyleSheet } from 'react-native';

interface Props {
  id: number;
  passengers: number;
}

export const ElevatorCard = ({ id, passengers }: Props) => {
  const isFull = passengers >= 13;

  return (
    <View style={[styles.card, isFull && styles.fullCard]}>
      <Text style={styles.title}>Elevador {id + 1}</Text>
      <Text style={styles.count}>{passengers} / 13</Text>
      <Text style={styles.status}>{isFull ? "LOTAÇÃO MÁXIMA" : "Disponível"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    borderLeftWidth: 5,
    borderLeftColor: '#DC143C',
    elevation: 3,
  },
  fullCard: {
    borderLeftColor: '#8B0000',
    backgroundColor: '#FFF0F0',
  },
  title: { fontWeight: 'bold', fontSize: 16 },
  count: { fontSize: 20, color: '#DC143C', marginVertical: 4 },
  status: { fontSize: 12, color: '#666' }
});