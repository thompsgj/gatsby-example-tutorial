import React from "react"
import { useStaticQuery, graphql } from "gatsby"

//Option 3- set up Query to separate concerns
/*const getData = graphql`
  {
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
*/

//Option 3 w/ query and query keyword
const getData = graphql`
  query FirstQuery {
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
  /* Option 1
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
          data {
            name
            age
          }
        }
      }
    }
  `)
*/
  /*
  //Option 2 - Destructured version
  // "Info" is an alias
  // Destructure to site, then again to siteMetadata
  const {
    site: { siteMetadata: info },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
          data {
            name
            age
          }
        }
      }
    }
  `)
*/

  //Option 3 - using variable query
  const {
    site: { siteMetadata: info },
  } = useStaticQuery(getData)

  const title = info.siteTitle

  return (
    <div>
      {/* Different ways of putting data into page */}
      <h1>
        author: {info.author}
        {/*{data.site.siteMetadata.author}*/}
      </h1>
      {/* Using an alias replaces the original, so this doesn't work */}
      <h1>title: {info.title} </h1>
      <h1>title: {title}</h1>
    </div>
  )
}

export default Header
