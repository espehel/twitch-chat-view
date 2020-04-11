export interface Message {
  text: string;
  timestamp: number;
}

export interface ChatState {
  messages: string[];
  frequencyMap: Map<string, number>;
  words: Map<string, number>;
}
