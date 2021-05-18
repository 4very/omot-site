import * as React from "react";

import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Base from "../components/base";

export const query = graphql`
  query ($slug: String!) {
    contentfulPhotopost(slug: { eq: $slug }) {
      title
      rtext {
        raw
      }
    }
  }
`;

const photopost = (props) => {
  const body = JSON.parse(props.data.contentfulPhotopost.rtext.raw);

  return (
    <Base>
      <div>
        <h1>{props.data.contentfulPhotopost.title}</h1>
        {documentToReactComponents(body, undefined)}
      </div>
    </Base>
  );
};

export default photopost;
