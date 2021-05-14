import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby'


// markup
const PhotoPage = () => {
    const data = useStaticQuery(graphql`query {
        allContentfulPhotopost {
          edges {
            node {
              title
            }
          }
        }
      }`)

  return (
    <div>
      testing
      <ol>
          {data.allContentfulPhotopost.edges.map((edge) => {
              return (
                <li>
                    <h2>{edge.node.title}</h2>
                </li>
              )
          })}
      </ol>
    </div>
    
  );
}

export default PhotoPage
