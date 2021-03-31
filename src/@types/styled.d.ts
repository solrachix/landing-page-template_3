import 'styled-components'

import { DarkTheme } from '../styles/theme'

export type Theme = typeof DarkTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
