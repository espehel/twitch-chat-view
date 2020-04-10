import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { ChatState } from '../types';
import { clearMessageBuffer, getMessageBuffer, openChat } from './twitch';

const initialState: ChatState = {
  messages: [],
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
      dispatch(getMessageBuffer());
      clearMessageBuffer();
    }, 500);
  }, [channel]);

  const [chat, dispatch] = useReducer<MessageReducer>(
    (prevMessages, newMessages) => ({
      messages: newMessages.concat(prevMessages.messages).slice(0, 100),
    }),
    initialState
  );

  return <ChatContext.Provider value={chat}>{children}</ChatContext.Provider>;
};
