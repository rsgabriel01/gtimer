import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CyclesContextProvider } from './contexts/CyclesContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { darkTheme } from './styles/themes/dark'
import { lightTheme } from './styles/themes/light'
import usePersistedState from './utils/usePersistedState'

export function App() {
  const [theme, setTheme] = usePersistedState<string>(
    '@g-timer:theme-state-1.0.0',
    darkTheme.title
  )

  const toggleTheme = () => {
    theme === 'light' ? setTheme(darkTheme.title) : setTheme(lightTheme.title)
  }

  return (
    // <ThemeProvider theme={theme}>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <button onClick={toggleTheme} style={{ display: 'none' }}>
        Switch Theme
      </button>

      <BrowserRouter>
        <CyclesContextProvider handleToggleTheme={toggleTheme}>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
