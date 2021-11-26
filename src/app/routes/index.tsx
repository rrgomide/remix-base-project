import { Link } from 'remix'

export default function Index() {
  return (
    <>
      <p>
        Hi, this is a base project based on the official Remix "npx
        create-remix-app".
      </p>

      <p>
        Check the <Link to="simple-projects">Simple Projects</Link> link for
        more examples.
      </p>
    </>
  )
}
