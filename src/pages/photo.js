import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Base from "../components/base";

// markup
const PhotoPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPhotopost {
        edges {
          node {
            title
          }
        }
      }
    }
  `);

  return (
    <Base>
      <div>
        testing
        <ol>
          {data.allContentfulPhotopost.edges.map((edge) => {
            return (
              <li>
                <h2>{edge.node.title}</h2>
              </li>
            );
          })}
        </ol>
      </div>
    </Base>
  );
};

export default PhotoPage;
