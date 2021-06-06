/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const fs = require(`fs`)
const getWalks = require("./content/walks")

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const walks = getWalks()
  //   const walks = yaml.safeLoad(fs.readFileSync(`./content/walks.json`, `utf-8`))

  console.log({ walks })
  walks.forEach(walk => {
    if (!walk.warning) {
      createPage({
        path: `walks/${walk.slug}`,
        component: require.resolve(`./src/templates/walk.js`),
        context: walk,
      })
    }
  })

  createPage({
    path: "walks",
    component: require.resolve(`./src/templates/walks.js`),
    context: { walks },
  })
}
