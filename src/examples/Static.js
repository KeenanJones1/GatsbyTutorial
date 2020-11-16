import { StaticQuery, graphql } from 'gatsby'
import React from 'react'

const Static = () => (
 <StaticQuery query={graphql`{
  site {
   info: siteMetadata {
    author
    data
    description
    title
   }
  }
 }`} render={data => <h4>{data.site.info.description}</h4>}></StaticQuery>
)

export default Static

