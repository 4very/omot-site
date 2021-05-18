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
          }
        }
      }
    }
  `);

  return (
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {data.allContentfulPhotopost.edges.map((edge) => {
        return (
          <div class="rounded overflow-hidden shadow-lg">
            <img
              class="w-full"
              src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg"
              alt="Mountain"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{edge.node.title}</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blogpreview;
