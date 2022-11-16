import React from "react"
import { graphql } from "gatsby"
import '../styles/index.css'
import Layout from "../components/Layout"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
      <Layout>
        <div className='blog-post__single-post__wrapper'>
          <h1 >{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="blog-post__single-post"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD/MM/YYYY")
        path
        title
      }
    }
  }
`