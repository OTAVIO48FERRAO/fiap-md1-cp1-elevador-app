import { View, Text, StyleSheet } from 'react-native';
import { useElevator } from '../context/ElevatorContext';
import { calculateDistribution, ELEVATOR_CONFIG } from '../src/utils/calculations';
import { useEffect, useState } from 'react';
import InfoCard from '../src/components/InfoCard'; // Importando o componente

export default function Simulation() {
  const { floors } = useElevator();
  const [metrics, setMetrics] = useState({ avg: "0", occupancy: "0%" });

  useEffect(() => {
    const total = floors.reduce((a, b) => a + b, 0);
    const avg = calculateDistribution(total);
    const occ = total > 0 
      ? ((Number(avg) / ELEVATOR_CONFIG.CAPACITY) * 100).toFixed(1) 
      : 0;

    setMetrics({ avg, occupancy: `${occ}%` });
  }, [floors]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Distribuição por Elevador</Text>
      
      <View style={styles.row}>
        {[1, 2, 3, 4].map(num => (
          <View key={num} style={styles.elevatorBox}>
            <Text style={styles.evText}>Elev. {num}</Text>
            <Text style={styles.evValue}>{metrics.avg}</Text>
          </View>
        ))}
      </View>

      {/* Usando o InfoCard com cor personalizada */}
      <InfoCard 
        label="Ocupação Média Estimada" 
        value={metrics.occupancy} 
        valueColor="#00ff88"
      />

      <Text style={styles.footerNote}>* Cálculo baseado no cenário ideal de distribuição uniforme para o térreo.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  title: { color: '#f5f5f5', fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  row: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 10, marginBottom: 20 },
  elevatorBox: { backgroundColor: '#1e1e1e', width: '47%', padding: 20, borderRadius: 10, alignItems: 'center', borderBottomWidth: 3, borderBottomColor: '#ff007f' },
  evText: { color: '#f5f5f5', marginBottom: 5 },
  evValue: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  footerNote: { color: '#666', fontSize: 12, marginTop: 10, textAlign: 'center', fontStyle: 'italic' }
});