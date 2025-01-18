import { HeaderContainer } from './styles'

import { useTheme } from 'styled-components'

import { useContext } from 'react'
import { PiMoon, PiScroll, PiSun, PiTimer } from 'react-icons/pi'
import { NavLink } from 'react-router-dom'
import logoIgnite from '../../assets/logo-ignite.svg'
import { CyclesContext } from '../../contexts/CyclesContext'

export function Header() {
  const theme = useTheme()
  const { handleToggleThemeContext } = useContext(CyclesContext)

  return (
    <HeaderContainer>
      <div className="logoAndTheme">
        <img src={logoIgnite} alt="" />
        <div className="theme">
          {theme['title'] === 'light' ? (
            <PiMoon size={24} onClick={handleToggleThemeContext} />
          ) : (
            <PiSun size={24} onClick={handleToggleThemeContext} />
          )}
        </div>
      </div>

      <nav>
        <NavLink to="/" title="Timer">
          <PiTimer size={24} />
        </NavLink>

        <NavLink to="/history" title="Histórico">
          <PiScroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
