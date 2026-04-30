import { View, Text, StyleSheet } from 'react-native';
import { useElevator } from '../src/context/ElevatorContext';
import { calculateTrips, ELEVATOR_CONFIG } from '../src/utils/calculations';
import InfoCard from '../src/components/InfoCard'; // Importando o componente

export default function Details() {
  const { floors } = useElevator();
  const totalPeople = floors.reduce((a, b) => a + b, 0);
  const trips = calculateTrips(totalPeople);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Análise de Carga</Text>
      
      <InfoCard 
        label="Total de pessoas aguardando:" 
        value={totalPeople} 
      />

      <InfoCard 
        label="Viagens necessárias (Estimativa):" 
        value={trips} 
        subLabel={`Considerando ${ELEVATOR_CONFIG.COUNT} elevadores (Cap: ${ELEVATOR_CONFIG.CAPACITY})`}
      />

      {totalPeople === 0 && <Text style={styles.error}>Nenhuma chamada registrada no momento.</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  title: { color: '#f5f5f5', fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  error: { color: '#ff007f', textAlign: 'center', marginTop: 20 }
});