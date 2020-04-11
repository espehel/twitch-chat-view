import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { ChatState } from '../types';
import { flushMessageBuffer, openChat } from './twitch';
import {
  reduceFrequencyMap,
  reduceMessages,
  reduceWords,
} from './chatReducers';

const initialState: ChatState = {
  messages: [],
  frequencyMap: new Map<string, number>(),
  words: new Map<string, number>(),
};

const ChatContext = createContext<ChatState>(initialState);

interface Props {
  channel: string;
}

export const useChatState = () => useContext<ChatState>(ChatContext);

export const ChatProvider: FC<Props> = ({ channel, children }) => {
  interface MessageReducer {
    (prevMessages: ChatState, newMessages: string[]): ChatState;
  }

  useEffect(() => {
    openChat(channel);
    setInterval(() => {
      dispatch(flushMessageBuffer());
    }, 500);
  }, [channel]);

  const [chat, dispatch] = useReducer<MessageReducer>(
    (prevState, newMessages) => ({
      messages: reduceMessages(prevState, newMessages),
      frequencyMap: reduceFrequencyMap(prevState, newMessages),
      words: reduceWords(prevState, newMessages),
    }),
    initialState
  );

  return <ChatContext.Provider value={chat}>{children}</ChatContext.Provider>;
};
