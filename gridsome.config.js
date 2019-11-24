// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",
  templates: {
    DatoArticle: "/:title"
  },
  plugins: [
    {
      use: "@gridsome/source-datocms",
      options: {
        apiToken: "5e8c9c6bc319cca1186f9fe5559432", // required
        previewMode: false,
        apiUrl: "https://site-api.datocms.com",
        typeName: "Dato"
      }
    }
  ]
};
