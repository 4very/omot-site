import * as React from "react"

import { graphql } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
query($slug: String!) {
    contentfulPhotopost(slug: { eq: $slug }) {
      title
      rtext {
        raw
      }
    }
  }
  
`

const photopost = (props) => {

    const body = JSON.parse(props.data.contentfulPhotopost.rtext.raw)

    return (
        <div>
            <h1>{props.data.contentfulPhotopost.title}</h1>
            {documentToReactComponents(body, undefined)}
        
        </div>
    )
}

export default photopost