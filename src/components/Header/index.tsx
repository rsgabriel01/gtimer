import { HeaderContainer } from './styles'

import { PiScroll, PiSun, PiTimer } from 'react-icons/pi'
import { NavLink } from 'react-router-dom'
import logoIgnite from '../../assets/logo-ignite.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div className="logoAndTheme">
        <img src={logoIgnite} alt="" />
        <div className="theme">
          <PiSun size={24} />
          {/* <PiMoon size={24} /> */}
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
