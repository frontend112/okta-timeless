import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import '../styles/index.css'
import Layout from '../components/Layout'
import Post from '../components/Post'
export function DressCodeNigdyNarodowo({data}){
  const posts = data.allMarkdownRemark.edges
  let newPosts = posts.map(({node:post})=>{
    if(checkPath(`${post.frontmatter.path}`))
    return post
    else return ''
  })
  newPosts = newPosts.filter(function(v){return v!==''});
  return(
  <Layout>
    {
      newPosts.map((post,id)=>(
        <Post post={post} id={id}/>
      ))
    }
  </Layout>)
}
function checkPath(pathToCheck){
  const properPath = new RegExp('/blog/dress-code/biznesowo/.*')
  return properPath.test(pathToCheck)
}
DressCodeNigdyNarodowo.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};
const query = () => (
  <StaticQuery
    query={graphql`
      query DressCodeNigdyNarodowo {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              frontmatter {
                path
                title
                date(formatString: "MMMM DD, YYYY")
                mainImage {
                  childImageSharp {
                    gatsbyImageData(
                      width: 200
                      blurredOptions: {width: 100}
                      placeholder: BLURRED
                      transformOptions: {cropFocus: CENTER}
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
    render={(data) => <DressCodeNigdyNarodowo data={data}/>}
  />
)

export default query