export const ELEVATOR_CONFIG = {
  COUNT: 4,
  CAPACITY: 13,
};

export const calculateTrips = (totalPeople: number) => {
  const totalCapacity = ELEVATOR_CONFIG.COUNT * ELEVATOR_CONFIG.CAPACITY;
  return Math.ceil(totalPeople / totalCapacity);
};

export const calculateDistribution = (totalPeople: number) => {
  return (totalPeople / ELEVATOR_CONFIG.COUNT).toFixed(2);
};