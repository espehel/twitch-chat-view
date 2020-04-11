declare module 'wink-nlp-utils' {
  interface NlpString {
    stem: (word: string) => string;
    removePunctuations: (text: string) => string;
    retainAlphaNums: (text: string) => string;
    tokenize0: (text: string) => Array<string>;
    tokenize: (
      text: string,
      detailed: boolean
    ) => Array<string> | Array<{ value: string; tag: string }>;
  }

  interface NlpTokens {
    removeWords: (tokens: Array<string>) => Array<string>;
    stem: (tokens: Array<string>) => Array<string>;
  }

  interface Nlp {
    string: NlpString;
    tokens: NlpTokens;
  }
  const nlp: Nlp;

  export default nlp;
}
