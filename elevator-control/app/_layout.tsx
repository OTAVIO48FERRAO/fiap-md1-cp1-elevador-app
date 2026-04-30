import { Stack, Tabs } from 'expo-router';
import { AuthProvider, useAuth } from '../src/context/AuthContext';
import { ElevatorProvider } from '../src/context/ElevatorContext';
import { ThemeProvider, useTheme } from '../src/context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';

function NavigationContent() {
  const { user } = useAuth();
  const { colors, theme } = useTheme();

  // Se não estiver logado, mostra apenas Login e Register
  if (!user) {
    return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" />
        <Stack.Screen name="Register" />
      </Stack>
    );
  }

  // Se estiver logado, mostra as Tabs dentro do Provider do Elevador
  return (
    <ElevatorProvider>
      <Tabs
        screenOptions={{
          headerTitle: "FIAP ELEVATOR",
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.primary,
          tabBarStyle: { 
            backgroundColor: colors.background, 
            borderTopColor: theme === 'dark' ? '#333' : '#ddd' 
          },
          tabBarActiveTintColor: colors.primary,
        }}
      >
        <Tabs.Screen 
          name="index" 
          options={{ 
            title: 'Dashboard', 
            tabBarIcon: ({ color }) => <Ionicons name="apps" size={24} color={color} /> 
          }} 
        />
        <Tabs.Screen 
          name="details" 
          options={{ 
            title: 'Detalhes', 
            tabBarIcon: ({ color }) => <Ionicons name="stats-chart" size={24} color={color} /> 
          }} 
        />
        <Tabs.Screen 
          name="simulation" 
          options={{ 
            title: 'Simulação', 
            tabBarIcon: ({ color }) => <Ionicons name="git-network" size={24} color={color} /> 
          }} 
        />
        
        {/* Esconde as telas de Auth da barra de navegação inferior */}
        <Tabs.Screen name="Login" options={{ href: null }} />
        <Tabs.Screen name="Register" options={{ href: null }} />
      </Tabs>
    </ElevatorProvider>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NavigationContent />
      </AuthProvider>
    </ThemeProvider>
  );
}