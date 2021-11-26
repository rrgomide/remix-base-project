import { Link, NavLink } from 'remix'
import { CONFIG } from '~/config/appConfig'
import RemixLogo from '../_remix-default/RemixLogo'

const activeStyle = {
  borderBottom: '5px solid #444',
  paddingBottom: 5,
}

const inactiveStyle = {
  paddingBottom: 5,
}

export default function BaseLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div>
      <header>
        <nav aria-label="Main navigation">
          <ul className="bg-red-200 flex flex-row items-center p-4">
            <li>
              <Link
                to="/"
                title="Remix"
                className="remix-app__header-home-link"
              >
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

      <div className="remix-app__main">
        <div className="container remix-app__main-content">{children}</div>
      </div>

      <footer className="remix-app__footer">
        <div className="container remix-app__footer-content">
          <p>
            &copy; <a href="https://github.com/rrgomide">Raphael Gomide</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
