import { useState, useEffect } from 'react';

export const useElevatorSystem = () => {
  const [floorCalls, setFloorCalls] = useState<number[]>(Array(7).fill(0));
  const [totalDemand, setTotalDemand] = useState(0);

  useEffect(() => {
    const total = floorCalls.reduce((acc, curr) => acc + curr, 0);
    setTotalDemand(total);
  }, [floorCalls]);

  const addCall = (floorIndex: number) => {
    const newCalls = [...floorCalls];
    newCalls[floorIndex] += 1;
    setFloorCalls(newCalls);
  };

  const resetCalls = () => setFloorCalls(Array(7).fill(0));

  return { floorCalls, totalDemand, addCall, resetCalls };
};