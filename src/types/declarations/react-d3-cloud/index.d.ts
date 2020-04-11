declare module 'react-d3-cloud' {
  import { Component } from 'react';

  interface Word {
    text: string;
    value: number;
  }

  interface Props {
    data: Array<Word>;
    font?: string;
    fontSizeMapper?: (word: Word, idx: number) => number;
    height?: number;
    padding?: ((data: Word, index: number) => number) | number;
    rotate?: ((data: Word, index: number) => number) | number;
    width?: number;
    onWordClick?: (word: string) => void;
    onWordMouseOut?: (word: string) => void;
    onWordMouseOver?: (word: String) => void;
  }
  export default class WordCloud extends Component<Props> {}
}
