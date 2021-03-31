import React, { createContext, useState, useContext, useEffect } from 'react'

import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@/styles/GlobalStyle'
import { DarkTheme, LightTheme } from '@/styles/theme'

interface GlobalContextData {
  handleThemeChanges(): void
}

const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData)

export const GlobalProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(DarkTheme)

  function handleThemeChanges() {
    setTheme(theme.title === 'Light' ? DarkTheme : LightTheme)
  }

  return (
    <GlobalContext.Provider value={{ handleThemeChanges }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </GlobalContext.Provider>
  )
}

// Hook próprio
export function useGlobal(): GlobalContextData {
  const context = useContext(GlobalContext)

  return context
}
