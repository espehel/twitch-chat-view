import { ChatState } from '../types';

export const reduceMessages = (
  prevState: ChatState,
  newMessages: string[]
): string[] => newMessages.concat(prevState.messages).slice(0, 500);

export const reduceFrequencyMap = (
  prevState: ChatState,
  newMessages: string[]
): Map<string, number> => {
  const nextMap = new Map(prevState.frequencyMap);
  newMessages.forEach((message) => {
    const frequency = nextMap.get(message);
    if (frequency !== undefined) {
      nextMap.set(message, frequency + 1);
    } else {
      nextMap.set(message, 1);
    }
  });
  return nextMap;
};
