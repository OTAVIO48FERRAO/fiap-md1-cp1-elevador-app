import { Tabs } from 'expo-router';
import { ElevatorProvider } from '../context/ElevatorContext';
import { Ionicons } from '@expo/vector-icons';


export default function Layout() {
  return (
    <ElevatorProvider>
      <Tabs screenOptions={{
        headerTitle: "FIAP ", 
        headerTitleAlign: 'center',       // Centraliza o título
        headerStyle: { backgroundColor: '#121212' },
        headerTintColor: '#ff007f',       // Título na cor de destaque
        tabBarStyle: { backgroundColor: '#121212' },
        tabBarActiveTintColor: '#ff007f',

}}>
        <Tabs.Screen name="index" options={{ title: 'Dashboard', tabBarIcon: ({color}) => <Ionicons name="apps" size={24} color={color}/> }} />
        <Tabs.Screen name="details" options={{ title: 'Detalhes', tabBarIcon: ({color}) => <Ionicons name="stats-chart" size={24} color={color}/> }} />
        <Tabs.Screen name="simulation" options={{ title: 'Simulação', tabBarIcon: ({color}) => <Ionicons name="git-network" size={24} color={color}/> }} />
      </Tabs>
    </ElevatorProvider>
  );
}

