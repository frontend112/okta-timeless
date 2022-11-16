import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"
import "../styles/index.css"
import "../fonts/crimson/OTF/Crimson-Semibold.otf"
import Layout from "./Layout.js"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

function BlogRoll({ data }) {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <div className="blog-list__content-wrapper">
        {posts.map(({ node: post }, index) =>
          post.frontmatter.mainImage ? (
            <div key={post.id} className="blog-list__wrapper">
              <GatsbyImage
                className="blog-list blog-list--picture"
                image={getImage(post.frontmatter.mainImage)}
                alt="mainimage"
              />
              <div className="blog-list blog-list--description">
                <p className="blog-list blog-list--date">
                  {post.frontmatter.date}
                </p>
                <p className="blog-list blog-list--title">
                  {post.frontmatter.title}
                </p>
                <p className="blog-list blog-list--link">
                  <Link to={post.frontmatter.path}>kliknij tu!</Link>
                </p>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </Layout>
  )
}
BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

const query = () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              id
              frontmatter {
                path
                title
                date(formatString: "DD/MM/YYYY")
                mainImage {
                  childImageSharp {
                    gatsbyImageData(
                      width: 200
                      blurredOptions: { width: 100 }
                      placeholder: BLURRED
                      transformOptions: { cropFocus: CENTER }
                      aspectRatio: 0.7
                    )
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <BlogRoll data={data} />}
  />
)

export default query
