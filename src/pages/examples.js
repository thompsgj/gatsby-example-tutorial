import React from "react"
import HeaderHook from "../examples/Header-Hooks"
import HeaderStatic from "../examples/Header-Static"
import { graphql } from "gatsby"
import Layout from "../components/layout"
const examples = props => {
  const { name, age } = props.data.site.siteMetadata.person

  return (
    <div>
      examples page
      <HeaderHook />
      <HeaderStatic />
      <div>
        This is our person
        <h4>Name: {name}</h4>
        <h4>Age: {age}</h4>
      </div>
    </div>
  )
}

//Page Query
export const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        description
        author
        person: data {
          name
          age
        }
      }
    }
  }
`

export default examples
