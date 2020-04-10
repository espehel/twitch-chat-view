import { Client } from 'tmi.js';

let messagesBuffer: string[] = [];
let client: Client | null = null;

export const openChat = async (channel: string): Promise<void> => {
  if (client) {
    messagesBuffer = [];
    await client.disconnect();
  }
  client = Client({
    connection: {
      secure: true,
      reconnect: true,
    },
    channels: [channel],
  });

  await client.connect();

  client.on('message', (channel, tags, message) => {
    console.log(`${tags['display-name']}: ${message}`);
    messagesBuffer.push(message);
  });
};

export const getMessageBuffer = () => {
  return [...messagesBuffer];
};

export const clearMessageBuffer = () => {
  messagesBuffer = [];
};
