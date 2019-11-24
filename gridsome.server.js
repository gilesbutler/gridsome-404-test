// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });

  api.afterBuild(async ({ config, redirects }) => {
    console.log(redirects);
    // let data = "";

    // for (const rule of redirects) {
    //   data = `\n${rule.from} ${rule.to}`;
    //   // rule.from   - The dynamic path
    //   // rule.to     - The HTML file path
    //   // rule.status - 200 if rewrite rule
    // }

    // const outFile = path.join(config.outputDir, "message.txt");
    // await fs.writeFile(outFile, data);
  });
};
