const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const generateSourceMap = process.env.OMIT_SOURCEMAP === "true" ? false : true;
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");

const cssRegex = /\.scss|\.css$/;

const babelLoader = {
    test: /\.(js|jsx|ts|tsx|mjs)$/,
    exclude: /node_modules/,
    loader: require.resolve("babel-loader"),
    options: {
        plugins: [
            [
                require.resolve("babel-plugin-named-asset-import"),
                {
                    loaderMap: {
                        svg: {
                            ReactComponent: "@svgr/webpack?-prettier,-svgo![path]",
                        },
                    },
                },
            ],
        ],
        cacheDirectory: true,
        cacheCompression: process.env.NODE_ENV === "production",
        compact: process.env.NODE_ENV === "production",
    },
};

const cssLoaderClient = {
    test: cssRegex,
    use: [
        require.resolve("css-hot-loader"),
        MiniCssExtractPlugin.loader,
        require.resolve("css-loader"),
        {
            loader: require.resolve("postcss-loader"),
            options: {
                sourceMap: generateSourceMap,
            },
        },
        {
            loader: require.resolve("sass-loader"),
            options: {
                sourceMap: generateSourceMap,
            },
        },
    ],
};

const cssLoaderServer = {
    test: cssRegex,
    use: [require.resolve("css-loader")],
};

const urlLoaderClient = {
    test: /\.(png|jpe?g|gif|svg)$/,
    loader: require.resolve("url-loader"),
    options: {
        limit: 2048,
        name: "assets/[name].[hash:8].[ext]",
    },
};

const urlLoaderServer = {
    ...urlLoaderClient,
    options: {
        ...urlLoaderClient.options,
        emitFile: false,
    },
};

const fileLoaderClient = {
    exclude: [/\.(js|jsx|ts|tsx|css|mjs|html|ejs|json)$/],
    use: [
        {
            loader: require.resolve("file-loader"),
            options: {
                name: "assets/[name].[hash:8].[ext]",
            },
        },
    ],
};

const fileLoaderServer = {
    exclude: [/\.(js|tsx|ts|tsx|css|mjs|html|ejs|json)$/],
    use: [
        {
            loader: require.resolve("file-loader"),
            options: {
                name: "assets/[name].[hash:8].[ext]",
                emitFile: false,
            },
        },
    ],
};

const client = [
    {
        oneOf: [babelLoader, cssLoaderClient, urlLoaderClient, fileLoaderClient],
    },
];
const server = [
    {
        oneOf: [babelLoader, cssLoaderServer, urlLoaderServer, fileLoaderServer],
    },
];

module.exports = {
    client,
    server,
};
