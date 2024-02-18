import { WAIT_DURATION } from './defaults';

export const getInitials = (str: string): string => {
  const words = str.split(' ');
  const firstTwoLetters = words.map((word) => word.charAt(0)).slice(0, 2);
  const result = firstTwoLetters.join('');

  return result;
};

export const wait = (duration: number = WAIT_DURATION): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};

export const minimumTwoDigits = (num: number): string => {
  return String(num).padStart(2, '0');
};
