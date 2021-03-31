// import { shade } from 'polished'

export const LightTheme = {
  title: 'Light',
  colors: {
    primary: {
      lighter: '#2aa9e0',
      light: '#615df0',
      normal: '#5965e0',
      dark: '#4953b8',
      darker: '#3846D4'
    },
    secondary: '#E02041',

    background: {
      light: '#fff',
      normal: '#f2f3f5',
      dark: '#dcdde0'
    },
    text: {
      highlight: '#b3b9ff',
      normal: '#666666',
      title: '#2e384d'
    },

    white: '#f7f7f7',
    grey: 'aeaeb0',
    opaque: '#41414D',
    purple: '#6633cc',
    purpleDark: '#5A4B81',
    green: '#51B56D',
    orange: '#E89E64',
    pink: '#FF79C6',
    blue: '#2436e8' /** #5659eb */,
    red: '#e83f5b',
    yellow: '#e7de79'
  }
}

export const DarkTheme = {
  title: 'Dark',
  colors: {
    primary: {
      light: '#9466ff',
      normal: '#8257e5',
      dark: '#734bd1',
      darker: '#6833e4'
    },
    secondary: '#e1e1e6',
    icons: '#41414d', // #323238

    background: {
      lighter: '#323238',
      light: '#181818',
      normal: '#121214',
      dark: '#0D0D0D'
    },
    text: {
      size: '18px',
      highlight: '#b3b9ff',
      normal: '#a8a8b3',
      title: '#555'
    },
    linearGradient: {
      light: 'linear-gradient(155.49deg,#11251c,rgba(17,37,28,0.6))',
      normal: 'linear-gradient(155.49deg,#064523,#0f2c1d 39.06%,#11251c)',
      dark:
        'radial-gradient(31.12% 84.59% at 26.38% 50%,#04d361 0%,rgba(8,60,32,0.25) 71.35%,rgba(9,9,10,0) 100%),#09090a'
    },

    react: '#2ac7e3',
    white: '#fff',
    black: '#09090a',
    grey: 'aeaeb0',
    opaque: '#41414D',
    purple: '#6633cc',
    purpleDark: '#5A4B81',
    green: '#04d361',
    orange: '#ff7a29',
    pink: '#FF79C6',
    blue: '#2436e8' /** #5659eb */,
    red: '#ce4a4a',
    yellow: '#ffcd1e'
  }
}
