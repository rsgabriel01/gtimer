import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CyclesContextProvider } from './contexts/CyclesContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { lightTheme } from './styles/themes/light'

export function App() {
  const [theme, setTheme] = useState('defaultTheme')
  const themeToggler = () => {
    theme === 'lightTheme' ? setTheme('defaultTheme') : setTheme('lightTheme')
  }
  return (
    <ThemeProvider theme={theme === 'lightTheme' ? lightTheme : defaultTheme}>
      <button onClick={themeToggler} style={{ display: 'none' }}>
        Switch Theme
      </button>

      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
