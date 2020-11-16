import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from '../components/Layout'

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      site(siteMetadata: {}) {
        info:siteMetadata {
          author
          data
          description
          title
        }
      }
    }
  `)

  const {title, author} = data.site.info

  return <div>
   <Layout>
    <h1>
     title: {title}
    </h1>
    <h1>
     author: {author}
    </h1>
   </Layout>
  </div>
}

export default ComponentName
