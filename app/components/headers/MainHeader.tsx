import { Link, NavLink } from 'remix'
import { CONFIG } from '~/config/app-config'
import RemixLogo from '../_remix-default/RemixLogo'

const activeStyle = {
  borderBottom: '4px solid #555',
  paddingBottom: 5,
}

const inactiveStyle = {
  paddingBottom: 5,
}

export default function MainHeader() {
  return (
    <header>
      <nav aria-label="Main navigation">
        <ul className="bg-gray-200 flex flex-row items-center justify-between p-4">
          <li>
            <Link to="/" title="Remix">
              <RemixLogo />
            </Link>
          </li>

          {CONFIG.navbarVisibleRoutes.map(({ id, description, path }) => {
            return (
              <li key={id}>
                <NavLink
                  to={path}
                  style={({ isActive }) =>
                    isActive ? activeStyle : inactiveStyle
                  }
                >
                  {description}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
