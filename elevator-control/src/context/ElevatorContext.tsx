import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '@/src/context/AuthContext';

type ElevatorContextType = {
  floors: number[];
  incrementCall: (floorIndex: number) => void;
  runAutoSimulation: () => void;
  resetData: () => void;
};

const ElevatorContext = createContext<ElevatorContextType | undefined>(undefined);

const getStorageKey = (userId: string) => `@elevador_floors_${userId}`;

export const ElevatorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [floors, setFloors] = useState<number[]>(new Array(7).fill(0));

  // Carrega dados persistidos ao montar / trocar de usuário
  useEffect(() => {
    if (!user) {
      setFloors(new Array(7).fill(0));
      return;
    }
    AsyncStorage.getItem(getStorageKey(user.id))
      .then((raw) => {
        if (raw) setFloors(JSON.parse(raw));
        else setFloors(new Array(7).fill(0));
      })
      .catch(() => setFloors(new Array(7).fill(0)));
  }, [user]);

  // Persiste sempre que floors muda (e há usuário logado)
  const persist = async (data: number[]) => {
    if (!user) return;
    await AsyncStorage.setItem(getStorageKey(user.id), JSON.stringify(data)).catch(() => {});
  };

  const incrementCall = (index: number) => {
    const updated = [...floors];
    updated[index] += 1;
    setFloors(updated);
    persist(updated);
  };

  const runAutoSimulation = () => {
    const simulated = floors.map((val) => val + Math.floor(Math.random() * 10));
    setFloors(simulated);
    persist(simulated);
  };

  const resetData = () => {
    const empty = new Array(7).fill(0);
    setFloors(empty);
    persist(empty);
  };

  return (
    <ElevatorContext.Provider value={{ floors, incrementCall, runAutoSimulation, resetData }}>
      {children}
    </ElevatorContext.Provider>
  );
};

export const useElevator = () => {
  const context = useContext(ElevatorContext);
  if (!context) throw new Error('useElevator must be used within ElevatorProvider');
  return context;
};