import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { CustomInput } from '../src/components/CustomInput';
import { useAuth } from '../src/context/AuthContext';
import { useTheme } from '../src/context/ThemeContext';
import { useRouter } from 'expo-router';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp } = useAuth();
  const { colors } = useTheme();
  const router = useRouter();

  const handleRegister = () => {
  if (name && email && password) {
    signUp(name, email, password);}
};

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.primary }]}>Criar Conta</Text>
      
      <CustomInput label="Nome" placeholder="Seu nome" value={name} onChangeText={setName} />
      <CustomInput label="E-mail" placeholder="seu@email.com" value={email} onChangeText={setEmail} />
      <CustomInput 
        label="Senha" 
        placeholder="Crie uma senha" 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry 
      />
      
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={[styles.link, { color: colors.text }]}>Já tem conta? Entrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 40, textAlign: 'center' },
  button: { backgroundColor: '#ff007f', padding: 18, borderRadius: 8, alignItems: 'center', marginTop: 20 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  link: { textAlign: 'center', marginTop: 20, opacity: 0.7 },
});