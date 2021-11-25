import { Link, NavLink } from 'remix'
import { CONFIG } from '~/config/appConfig'
import RemixLogo from '../_remix-default/RemixLogo'

export default function BaseLayout({ children }: React.PropsWithChildren<{}>) {
  const linkActiveStyle = { textDecoration: 'underline' }

  return (
    <div className="remix-app">
      <header className="remix-app__header">
        <div className="container remix-app__header-content">
          <Link to="/" title="Remix" className="remix-app__header-home-link">
            <RemixLogo />
          </Link>

          <nav aria-label="Main navigation" className="remix-app__header-nav">
            <ul>
              {CONFIG.navbarVisibleRoutes.map(({ id, description, path }) => {
                return (
                  <li key={id}>
                    <NavLink
                      to={path}
                      style={({ isActive }) =>
                        isActive ? linkActiveStyle : {}
                      }
                    >
                      {description}
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
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
