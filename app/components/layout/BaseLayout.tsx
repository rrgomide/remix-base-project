import MainHeader from '../headers/MainHeader'

export default function BaseLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <MainHeader />

      <div className="container mx-auto">{children}</div>
    </>
  )
}
