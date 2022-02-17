
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/fabian/Documents/portfoliodemo/myportfoliov2/.cache/dev-404-page.js")),
  "component---node-modules-lekoarts-gatsby-theme-cara-src-templates-cara-tsx": preferDefault(require("/home/fabian/Documents/portfoliodemo/myportfoliov2/node_modules/@lekoarts/gatsby-theme-cara/src/templates/cara.tsx")),
  "component---src-pages-404-jsx": preferDefault(require("/home/fabian/Documents/portfoliodemo/myportfoliov2/src/pages/404.jsx"))
}

