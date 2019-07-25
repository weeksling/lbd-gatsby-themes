module.exports = ({ contentPath = "data", basePath = "/" }) => {
  return {
    plugins: [
      {
        resolve: "gatsby-source-filesystem",
        options: {
          path: contentPath
        }
      },
      {
        resolve: "gatsby-transformer-yaml",
        options: {
          typeName: "Event"
        }
      }
    ]
  };
};
