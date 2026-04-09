import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useElevator } from '../context/ElevatorContext';

export default function Dashboard() {
  const { floors, incrementCall, runAutoSimulation, resetData } = useElevator();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Registro de Chamadas</Text>
      
      {floors.map((calls, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.floorCard} 
          onPress={() => incrementCall(index)}
        >
          <Text style={styles.floorText}>{index === 0 ? 'Térreo' : `${index}º Andar`}</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{calls}</Text>
          </View>
        </TouchableOpacity>
      ))}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btnSimular} onPress={runAutoSimulation}>
          <Text style={styles.btnText}>Simulação Automática</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.btnSimular, {backgroundColor: '#444'}]} onPress={resetData}>
          <Text style={styles.btnText}>Zerar Dados</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  title: { color: '#f5f5f5', fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  floorCard: { 
    backgroundColor: '#1e1e1e', 
    padding: 20, 
    borderRadius: 10, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#ff007f'
  },
  floorText: { color: '#f5f5f5', fontSize: 18 },
  badge: { backgroundColor: '#ff007f', borderRadius: 15, paddingHorizontal: 12, justifyContent: 'center' },
  badgeText: { color: '#fff', fontWeight: 'bold' },
  buttonContainer: { marginTop: 20, gap: 10, marginBottom: 40 },
  btnSimular: { backgroundColor: '#ff007f', padding: 15, borderRadius: 8, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});