import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import '../styles/index.css'
import Layout from './Layout.js'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import '../styles/index.css'
function BlogRoll({data}){
  const posts = data.allMarkdownRemark.edges
  let pages = [0];
  let numberOfPage = 1
  const howManyPages = ()=>{
    for (let i = 0; i < posts.length; i++){
      if((i+1)%4 == 0){
        pages.push(numberOfPage)
        numberOfPage++
      }
    }
    return pages
  }
  const shouldShow = (index)=>{
      return true
  }
  function changePage(index){
    console.log('button clicked' + index)
  }
  return(
    <Layout>
      <div className='blog-list__content-wrapper'>
        {
          posts.map(({node:post},index)=>(
            post.frontmatter.mainImage&&shouldShow(index)?(
              <div key={post.id} className='blog-list__wrapper'>
                {/* <div>{index}</div> */}
                <GatsbyImage className='blog-list blog-list--picture' image={
                  getImage(post.frontmatter.mainImage)
                } alt='mainimage'/>
                <div className='blog-list blog-list--description'>
                  <p className='blog-list blog-list--date'>
                    {post.frontmatter.date}</p>
                  <p className='blog-list blog-list--title'>
                    {post.frontmatter.title}</p>
                  <p className='blog-list blog-list--link'>
                    <Link to={post.frontmatter.path}>
                      kliknij tu!
                    </Link>
                  </p>
                </div>
              </div>
            ):''
          ))
        }
        <div className='blog-list__other-posts'>
          <span>poprzednia</span>
            {
              howManyPages().map((element,index)=>(
                <button key={index} onClick={()=>changePage(element)}>
                  {element}
                </button>
              ))
            }
          <span>następna</span>
        </div>
      </div>
    </Layout>)
}
BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

const query = () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
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
                date(formatString: "DD/MM/YYYY")
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
    render={(data) => <BlogRoll data={data}/>}
  />
)

export default query