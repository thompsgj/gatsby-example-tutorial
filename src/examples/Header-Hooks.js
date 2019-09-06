import React from "react"
import { useStaticQuery, graphql } from "gatsby"

//Option 3 w/ query and query keyword
const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        description
        author
        data {
          name
          age
        }
      }
    }
  }
`

const Header = () => {
  const {
    site: { siteMetadata: info },
  } = useStaticQuery(getData)

  const title = info.siteTitle

  return (
    <div>
      <h1>author: {info.author}</h1>
      <h1>title: {title}</h1>
    </div>
  )
}

export default Header
