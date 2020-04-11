import { ChatState } from '../types';
import nlp from 'wink-nlp-utils';
import { updateFrequencies } from './utils';

export const reduceMessages = (
  prevState: ChatState,
  newMessages: Array<string>
): Array<string> => newMessages.concat(prevState.messages).slice(0, 500);

export const reduceFrequencyMap = (
  prevState: ChatState,
  newMessages: Array<string>
): Map<string, number> =>
  updateFrequencies(prevState.frequencyMap, newMessages);

export const reduceWords = (
  prevState: ChatState,
  newMessages: Array<string>
) => {
  const tokens = nlp.string.tokenize0(newMessages.join(' '));
  const proccesedTokens = nlp.tokens.removeWords(tokens).map(nlp.string.stem);
  return updateFrequencies(prevState.words, proccesedTokens);
};
