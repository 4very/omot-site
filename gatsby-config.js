module.exports = {
  siteMetadata: {
    title: "omot",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "mlX5lQqNw8v3TQtUacxe8iNDlRmAGGob1ARmXOAvX7k",
        spaceId: "r2nhtgw6tw17",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
