/**
 * Imports from 'remix' package
 */
import { Outlet, useCatch } from 'remix'
import type { LinksFunction } from 'remix'

/**
 * The Document component from Remix starter project
 */
import Document from './components/_remix-default/Document'

/**
 * This BaseLayout component is already customized from
 * the original Layout component from Remix starter project
 */
import BaseLayout from './components/layout/BaseLayout'

/**
 * Default styles from Remix starter project
 */
import deleteMeRemixStyles from '~/styles/demos/remix.css'
import globalStylesUrl from '~/styles/global.css'
import darkStylesUrl from '~/styles/dark.css'

/**
 * The `links` export is a function that returns an array of objects that map to
 * the attributes for an HTML `<link>` element. These will load `<link>` tags on
 * every route in the app, but individual routes can include their own links
 * that are automatically unloaded when a user navigates away from the route.
 *
 * https://remix.run/api/app#links
 *
 * Raphael Gomide: I understand that the "links" function is somehow
 * a "keyword" in Remix components. Remix understands it and applies
 * those links on components in a performant way
 */
export let links: LinksFunction = () => {
  /**
   * I chose to preserve the default layout links
   * Comment each one of these entries to check
   * the impact on the layout
   */
  return [
    /**
     * Global styles
     */
    { rel: 'stylesheet', href: globalStylesUrl },

    /**
     * Dark theme styles
     */
    {
      rel: 'stylesheet',
      href: darkStylesUrl,
      media: '(prefers-color-scheme: dark)',
    },

    /**
     * Start Remix app styles
     */
    { rel: 'stylesheet', href: deleteMeRemixStyles },
  ]
}

/**
 * The root module's default export is a component that renders the current
 * route via the `<Outlet />` component. Think of this as the global layout
 * component for your app.
 *
 * Raphael Gomide: you can name it anything you want, but it is considered
 * good practice to keep the same name as the file or folder name. In this case,
 * the folder name "app", but React components must start with a capital letter.
 */
export default function App() {
  return (
    <Document title="A Remix Base Project">
      <BaseLayout>
        {/* Raphael Gomide: this Outlet component from 'remix' is magic!
        It renders all the nested routes based on the files inside
        the "root" folder */}
        <Outlet />
      </BaseLayout>
    </Document>
  )
}

export function CatchBoundary() {
  let caught = useCatch()

  let jsxMessage

  switch (caught.status) {
    case 401:
      jsxMessage = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      )
      break

    case 404:
      jsxMessage = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      )
      break

    default:
      throw new Error(caught.data || caught.statusText)
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <BaseLayout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>

        {jsxMessage}
      </BaseLayout>
    </Document>
  )
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error)

  return (
    <Document title="Error!">
      <BaseLayout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>Error emitted by the ErrorBoundary component.</p>
        </div>
      </BaseLayout>
    </Document>
  )
}
