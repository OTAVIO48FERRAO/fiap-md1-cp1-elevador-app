import React, { createContext, useState, useContext } from 'react';

type User = { id: string; name: string; email: string } | null;

type AuthContextType = {
  user: User;
  signIn: (email: string, pass: string) => boolean;
  signUp: (name: string, email: string, pass: string) => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  // Lista inicial com o admin
  const [registeredUsers, setRegisteredUsers] = useState([
    { name: 'Admin', email: 'admin@fiap.com.br', password: 'admin123' }
  ]);

  const signIn = (email: string, pass: string) => {
    const found = registeredUsers.find(u => u.email === email && u.password === pass);
    if (found) {
      setUser({ id: found.email, name: found.name, email: found.email });
      return true;
    }
    return false;
  };

  const signUp = (name: string, email: string, pass: string) => {
    const newUser = { name, email, password: pass };
    setRegisteredUsers(prev => [...prev, newUser]);
    // Loga automaticamente após o cadastro
    setUser({ id: email, name, email });
  };

  const signOut = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};