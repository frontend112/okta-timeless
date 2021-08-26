import { Link } from 'gatsby'
import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import '../styles/index.css'
const Post = ({post,id})=> {
  return (
    <div key={id} className='blog-list__wrapper'> 
        <GatsbyImage className='blog-list blog-list--picture' image={
          getImage(post.frontmatter.mainImage)} alt='mainimage'
          />
        <div className='blog-list blog-list--description'>
          <p className='blog-list__date'>{post.frontmatter.date}</p>
          <p className='blog-list blog-list--title' >{post.frontmatter.title}</p>
          <p className='blog-list blog-list--link' ><Link to={post.frontmatter.path}>Kliknij tu</Link></p> 
        </div> 
    </div>
  )
}
export default Post