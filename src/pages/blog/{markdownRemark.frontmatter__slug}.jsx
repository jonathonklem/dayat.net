import * as React from "react"
import { graphql } from "gatsby"
import SectionBlock  from "../../components/SectionBlock.tsx"

import logo from "../../images/dayat-enterprises.png"

const sections = [
  {
    heading: "Let's Build Something",
    body: (
      <a className="border-2 w-36 text-center border-white inline-block border-solid mx-auto p-4" href="mailto:info@dayat.net">Contact Us</a>
    )
  },
  {
    body: String.fromCharCode(169) + " 2024 Dayat Technologies, LLC.  All rights reserved."
  }
];

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <main className="font-sans max-w-4xl mx-auto mt-4 h-4/6">
        <a href="/"><img className="max-w-sm" src={logo} /></a>
        <div>
            <h1 className="mt-12 font-bold font-mont text-4xl tracking-widest px-12">{frontmatter.title}</h1>
            <h2 className="text-sm tracking-widest pt-2 px-12">{frontmatter.date}</h2>
            <div className="blog-content px-12 mt-8 max-w-4xl mx-auto tracking-widest leading-loose"
            dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
      </main>
      {sections.map((section, index) => (
        <SectionBlock key={index} rowNum={index} {...section} />
      ))}
    </>
  
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`