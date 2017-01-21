import path from 'path'

function resolveApp(relativePath) {
  return path.resolve(relativePath)
}

module.exports = {
  appSrc: resolveApp('src'),
  appBuild: resolveApp('build'),
  appImgs: resolveApp('src/public/imgs'),
  appPublic: resolveApp('src/public'),
  appHtml: resolveApp('src/public/index.html'),
  appStylesheets: resolveApp('src/stylesheets'),
  appPackageJson: resolveApp('package.json'),
  appNodeModules: resolveApp('node_modules'),
  ownNodeModules: resolveApp('node_modules'),
}
