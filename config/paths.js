const path = require("path");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const paths = {
    appHtml: resolveApp("config/webpack.config.js/template.html"),
    clientBuild: resolveApp("public/client"),
    serverBuild: resolveApp("public/server"),
    dotenv: resolveApp(".env"),
    src: resolveApp("src"),
    srcClient: resolveApp("src/client"),
    srcServer: resolveApp("src/server"),
    srcCommon: resolveApp("src/common"),
    types: resolveApp("node_modules/@types"),
    publicPath: "/static/",
};

paths.resolveModules = [paths.srcClient, paths.srcServer, paths.srcCommon, paths.src, "node_modules"];

module.exports = paths;
