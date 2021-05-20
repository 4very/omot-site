import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Blogpreview = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPhotopost(
        limit: 3
        sort: { fields: publishDate, order: [ASC] }
      ) {
        edges {
          node {
            title
            publishDate
            slug
            hashtags
          }
        }
      }
    }
  `);

  return (
    <div className="container flex justify-center w-full  max-w-none">
      <div className="p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 w-2/3 justify-center">
        {data.allContentfulPhotopost.edges.map((edge) => {
          return (
            <div className="rounded-lg overflow-hidden shadow-lg bg-gray-200">
              <img
                className="w-full"
                src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg"
                alt="Mountain"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{edge.node.title}</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                {edge.node.hashtags &&
                  edge.node.hashtags.map((hashtag) => {
                    return (
                      <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #{hashtag}
                      </span>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogpreview;
