import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';

export const ThemeToggle = () => {
  const { theme, toggleTheme, colors } = useTheme();

  return (
    <TouchableOpacity 
      onPress={toggleTheme} 
      style={[styles.button, { backgroundColor: colors.card }]}
    >
      <Ionicons 
        name={theme === 'dark' ? 'sunny' : 'moon'} 
        size={20} 
        color={colors.primary} 
      />
      <Text style={{ color: colors.text, marginLeft: 8 }}>
        Modo {theme === 'dark' ? 'Claro' : 'Escuro'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 10,
  }
});