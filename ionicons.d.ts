/// <reference types="react" />

declare namespace JSX {
  interface IntrinsicElements {
    'ion-icon': {
      name: string;
      size?: string;
      class?: string;
      className?: string;
      style?: React.CSSProperties;
      [key: string]: any;
    };
  }
}
