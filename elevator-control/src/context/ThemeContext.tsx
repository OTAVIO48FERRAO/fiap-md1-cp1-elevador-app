import React, { createContext, useState, useContext } from 'react';

type ThemeMode = 'dark' | 'light';

type ThemeContextType = {
  theme: ThemeMode;
  toggleTheme: () => void;
  colors: {
    background: string;
    text: string;
    primary: string;
    card: string;
  };
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>('dark');

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const colors = {
    primary: '#ff007f',
    background: theme === 'dark' ? '#121212' : '#FFFFFF',
    text: theme === 'dark' ? '#FFFFFF' : '#121212',
    card: theme === 'dark' ? '#1e1e1e' : '#f0f0f0',
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};