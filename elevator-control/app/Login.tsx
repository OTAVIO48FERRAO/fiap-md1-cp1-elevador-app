import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { CustomInput } from '../src/components/CustomInput';
import { useAuth } from '../src/context/AuthContext';
import { useTheme } from '../src/context/ThemeContext';
import { ThemeToggle } from '../src/components/ThemeToggle';
import { useRouter } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();
  const { colors } = useTheme();
  const router = useRouter();

  const handleLogin = () => {
  const success = signIn(email, password);
  if (!success) {
    Alert.alert("Erro", "Credenciais inválidas");
  } };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.primary }]}>FIAP Elevator</Text>
      
      <CustomInput 
        label="E-mail" 
        placeholder="admin@fiap.com.br" 
        value={email} 
        onChangeText={setEmail} 
      />
      <CustomInput 
        label="Senha" 
        placeholder="Senha" 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry 
      />
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/Register')}>
        <Text style={[styles.link, { color: colors.text }]}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 20 }}>
        <ThemeToggle />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 40 },
  button: { backgroundColor: '#ff007f', padding: 18, borderRadius: 8, alignItems: 'center', marginTop: 20 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  link: { textAlign: 'center', marginTop: 20, opacity: 0.7 },
});