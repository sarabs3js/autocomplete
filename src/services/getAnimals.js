import { animals } from './data';

export const getAnimals = async (input) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(animals.filter((animal) => animal.toLowerCase().includes(input.toLowerCase())));
    }, 500);
  });
};