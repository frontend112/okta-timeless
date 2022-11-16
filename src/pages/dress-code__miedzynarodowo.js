import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import "../styles/index.css"
import NewPosts from "../components/NewPosts"
export function DressCodeMiedzynarodowo({ data }) {
  const posts = data.allMarkdownRemark.edges
  return <NewPosts posts={posts} correctPath="dress-code/miedzynarodowo" />
}
DressCodeMiedzynarodowo.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}
const query = () => (
  <StaticQuery
    query={graphql`
      query DressCodeMiedzynarodowo {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              excerpt(pruneLength: 400)
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
    render={data => <DressCodeMiedzynarodowo data={data} />}
  />
)

export default query
