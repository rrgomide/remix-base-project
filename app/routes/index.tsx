import { Link } from 'remix'

export default function Index() {
  return (
    <div className="p-4">
      <h2 className="text-center font-semibold text-2xl">
        Remix Base Project (by Raphael Gomide)
      </h2>

      <ul className="list-disc p-4 text-justify">
        <li className="mb-4">
          This is a base project based on the official Remix{' '}
          <a href="https://remix.run/docs/en/v1">
            <code>npx create-remix-app@latest</code>
          </a>{' '}
          command.
        </li>

        <li className="mb-4">
          In my opinion, this is cleaner and more organized.
        </li>

        <li className="mb-4">
          It also includes <a href="https://tailwindcss.com/">Tailwind CSS</a>{' '}
          as the default CSS framework.
        </li>

        <li className="mb-4">
          Check the <Link to="projects">Projects</Link> link for more examples.
        </li>

        <li className="mb-4">
          Check the file <code>./app/config/app-config.ts</code> if you want to
          create your own routes and projects.
        </li>

        <li>
          For more information, check out my Github repository at{' '}
          <a href="https://github.com/rrgomide/remix-base-project">
            https://github.com/rrgomide/remix-base-project
          </a>
          .
        </li>
      </ul>
    </div>
  )
}
