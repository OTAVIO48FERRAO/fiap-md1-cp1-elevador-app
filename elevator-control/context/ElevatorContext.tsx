import React, { createContext, useState, useContext } from 'react';

type ElevatorContextType = {
  floors: number[];
  incrementCall: (floorIndex: number) => void;
  runAutoSimulation: () => void;
  resetData: () => void;
};

const ElevatorContext = createContext<ElevatorContextType | undefined>(undefined);

export const ElevatorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [floors, setFloors] = useState<number[]>(new Array(7).fill(0));

  const incrementCall = (index: number) => {
    const newFloors = [...floors];
    newFloors[index] += 1;
    setFloors(newFloors);
  };

  const runAutoSimulation = () => {
    const simulated = floors.map(val => val + Math.floor(Math.random() * 10));
    setFloors(simulated);
  };

  const resetData = () => setFloors(new Array(7).fill(0));

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