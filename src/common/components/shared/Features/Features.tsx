import "./features.scss";
import React from "react";

const Features = () => (
    <React.Fragment>
        <h2>Features</h2>
        <ul className="wrapper">
            <li className="webpack">Webpack 4</li>
            <li className="hot">Babel 7</li>
            <li className="hot">ESLint 5</li>
            <li className="hot">TypeScript (using Babel 7)</li>
            <li className="hot">Jest 24</li>
            <li className="react">React 16.x (latest)</li>
            <li>React Router 4</li>
            <li>Redux (+ Thunk)</li>
            <li>Immer</li>
            <li>Reselect</li>
            <li>React Helmet</li>
            <li>Express Webserver + Server Side Rerendering</li>
            <li>CSS Modules</li>
            <li>PostCSS</li>
            <li>Prettier (incl. precommit-hook via lint-staged + husky)</li>
            <li>HMR (buggy, see Readme)</li>
        </ul>
    </React.Fragment>
);

export default Features;
