import React from "react";
import Features from "../shared/components/Features";
import Helmet from "react-helmet";
import css from "./App.module.css";
import favicon from "../shared/assets/favicon.png";
import { ReactComponent as ReactLogo } from "./assets/react.svg";
import { connect } from "react-redux";

type Props = {};

const App = () => {
    return (
        <div className={css.wrapper}>
            <Helmet
                defaultTitle="React SSR Starter – TypeScript Edition"
                titleTemplate="%s – React SSR Starter – TypeScript Edition"
                link={[{ rel: "icon", type: "image/png", href: favicon }]}
            />
            <h1>
                <ReactLogo className={css.reactLogo} /> React + Express – SSR Starter – TypeScript Edition
            </h1>
            <Features />
        </div>
    );
};

const mapDispatchToProps = {};

export default connect(
    null,
    mapDispatchToProps
)(App);
