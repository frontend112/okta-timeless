import React from 'react'
import Layout from './Layout'
import Post from './Post'

function NewPosts({posts}) {
    let newPosts = posts.map(({node:post})=>{
        if(checkPath(`${post.frontmatter.path}`))
            return post
            else return ''
        })
    newPosts = newPosts.filter(function(v){return v!==''});
    return(
        <Layout>
        <div className='blog-list__content-wrapper'>
          {
            newPosts.map((post,id)=>(
              <Post post={post} id={id}/>
            ))
          }
        </div>
      </Layout>
      )
}
function checkPath(pathToCheck){
    const properPath = new RegExp('/blog/dress-code/biznesowo/.*')
    return properPath.test(pathToCheck)
}
export default NewPosts
