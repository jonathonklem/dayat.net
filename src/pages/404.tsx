import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"



const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="font-sans max-w-4xl mx-auto mt-8 h-4/6">
      <h1 className="mt-24 font-bold font-mont text-4xl tracking-widest px-12">Page not found</h1>
      <p className="tracking-wider px-12 mt-8 text-lg leading-loose">
        Sorry 😔, we couldn’t find what you were looking for.
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
