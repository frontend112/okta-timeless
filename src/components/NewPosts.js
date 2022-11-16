import React from "react"
import Layout from "./Layout"
import Post from "./Post"

function NewPosts({ posts, correctPath }) {
  console.log(`${correctPath}`)
  let newPosts = posts.map(({ node: post }) => {
    if (checkPath(`${post.frontmatter.path}`, correctPath)) return post
    else return ""
  })
  newPosts = newPosts.filter(function (v) {
    return v !== ""
  })
  return (
    <Layout>
      <div className="blog-list__content-wrapper">
        {newPosts.map((post, id) => (
          <Post post={post} id={id} key={id} />
        ))}
      </div>
    </Layout>
  )
}
function checkPath(pathToCheck, correctPath) {
  console.log(pathToCheck + " and " + correctPath)
  const properPath = new RegExp(`/blog/${correctPath}/.*`)
  return properPath.test(pathToCheck)
}
export default NewPosts
