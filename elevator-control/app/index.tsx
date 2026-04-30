import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useElevator } from '../src/context/ElevatorContext';
import { useAuth } from '../src/context/AuthContext';
import { useTheme } from '../src/context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';

export default function Dashboard() {
  const { floors, incrementCall } = useElevator(); 
  const { signOut, user } = useAuth();
  const { theme, toggleTheme, colors } = useTheme();

  return (
    <ScrollView style={{ backgroundColor: colors.background }}>
      <View style={[styles.headerActions, { borderBottomColor: colors.card }]}>
        <TouchableOpacity onPress={toggleTheme} style={styles.iconButton}>
          <Ionicons 
            name={(theme === 'dark' ? 'sunny' : 'moon') as any} 
            size={24} 
            color={colors.primary} 
          />
          <Text style={{ color: colors.text, fontSize: 10 }}>Tema</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={signOut} style={styles.iconButton}>
          <Ionicons name="exit-outline" size={24} color="#ff4444" />
          <Text style={{ color: colors.text, fontSize: 10 }}>Sair</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={[styles.welcome, { color: colors.text }]}>
          Olá, <Text style={{ color: colors.primary, fontWeight: 'bold' }}>{user?.name || 'Usuário'}</Text>
        </Text>
        
        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <Text style={[styles.cardTitle, { color: colors.text }]}>Status dos Andares</Text>
          
          {floors.map((calls, index) => (
            <View key={index} style={[styles.floorRow, { borderBottomColor: theme === 'dark' ? '#333' : '#eee' }]}>
              <View>
                <Text style={[styles.floorText, { color: colors.text }]}>Andar {index}</Text>
                <Text style={{ color: colors.primary, fontSize: 13, fontWeight: '600' }}>
                  {calls} {calls === 1 ? 'chamada' : 'chamadas'}
                </Text>
              </View>
              
              <TouchableOpacity 
                style={[styles.callButton, { backgroundColor: colors.primary }]}
                onPress={() => incrementCall(index)} 
              >
                <Ionicons name="arrow-up" size={18} color="#fff" />
                <Text style={styles.callButtonText}>CHAMAR</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  headerActions: { 
    flexDirection: 'row', 
    justifyContent: 'flex-end', 
    padding: 15, 
    borderBottomWidth: 1,
    gap: 20
  },
  iconButton: { alignItems: 'center' },
  welcome: { fontSize: 20, marginBottom: 25 },
  card: { 
    padding: 20, 
    borderRadius: 20, 
    elevation: 8, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 4.65 
  },
  cardTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  floorRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1
  },
  floorText: { fontSize: 18, fontWeight: 'bold' },
  callButton: { 
    flexDirection: 'row',
    paddingHorizontal: 12, 
    paddingVertical: 8, 
    borderRadius: 8, 
    alignItems: 'center',
    gap: 5
  },
  callButtonText: { color: '#fff', fontSize: 12, fontWeight: 'bold' }
});