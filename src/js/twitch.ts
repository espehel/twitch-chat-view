import { Client } from 'tmi.js';
import { useEffect, useReducer } from 'react';

export const useOpenChat = (channel: string): string[] => {
  interface MessageReducer {
    (prevMessages: string[], newMessages: string[]): string[];
  }
  const [messages, dispatch] = useReducer<MessageReducer>(
    (prevMessages, newMessages) =>
      newMessages.concat(prevMessages).slice(0, 100),
    []
  );

  useEffect(() => {
    const client = Client({
      connection: {
        secure: true,
        reconnect: true,
      },
      channels: [channel],
    });

    client.connect();

    let messagesBuffer: string[] = [];
    setInterval(() => {
      dispatch(messagesBuffer);
      messagesBuffer = [];
    }, 500);

    client.on('message', (channel, tags, message) => {
      console.log(`${tags['display-name']}: ${message}`);
      messagesBuffer.push(message);
    });
  }, []);

  return messages;
};
