// import React from 'react';
import * as express from "express";
import path from "path";
import cors from "cors";
import chalk from "chalk";
import manifestHelpers from "express-manifest-helpers";
import bodyParser from "body-parser";
import paths from "../../config/paths";
import errorHandler from "./middleware/errorHandler";
import serverRenderer from "./middleware/serverRenderer";
import configure_store from "../common/redux/store";
import create_universal_history from "../common/redux/store/history";

require("dotenv").config();

const app = express.default();

// Use Nginx or Apache to serve static assets in production or remove the if() around the following
// lines to use the express.static middleware to serve assets for production (not recommended!)
// if (process.env.NODE_ENV === "development") {
//     app.use(paths.publicPath, express.static(path.join(paths.clientBuild, paths.publicPath)));
// }
app.use(paths.publicPath, express.static(path.join(paths.clientBuild, paths.publicPath)));

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const addStore = (req: express.Request, res: express.Response, next: express.NextFunction | undefined): void => {
    const history = create_universal_history({ initialEntries: [req.url] });
    res.locals.store = configure_store({ history });
    if (typeof next !== "function") {
        throw new Error("Next handler is missing");
    }
    next();
};

app.use(addStore);

const manifestPath = path.join(paths.clientBuild, paths.publicPath);

app.use(
    manifestHelpers({
        manifestPath: `${manifestPath}/manifest.json`,
    })
);

app.use(serverRenderer());

app.use(errorHandler);

app.listen(process.env.PORT || 8500, () => {
    console.log(`[${new Date().toISOString()}]`, chalk.blue(`App is running: 🌎 http://localhost:${process.env.PORT || 8500}`));
});

export default app;
