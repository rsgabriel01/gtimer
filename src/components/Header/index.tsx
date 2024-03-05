import { HeaderContainer } from './styles'

import { PiScroll, PiTimer } from 'react-icons/pi'
import { NavLink } from 'react-router-dom'
import logoIgnite from '../../assets/logo-ignite.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
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
