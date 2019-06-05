import "./counter.scss";
import React from "react";
import Features from "../../shared/Features/Features";
import Helmet from "react-helmet";
import favicon from "../../../assets/favicon.png";
import { ReactComponent as ReactLogo } from "../../../assets/react.svg";

export type CounterProps = {
    value: number;
    increment_counter: () => void;
    decrement_counter: () => void;
};

const Counter = (props: CounterProps) => {
    const { value, increment_counter, decrement_counter } = props;
    return (
        <div className="wrapper">
            <Helmet
                defaultTitle="React SSR Starter – TypeScript Edition"
                titleTemplate="%s – React SSR Starter – TypeScript Edition"
                link={[{ rel: "icon", type: "image/png", href: favicon }]}
            />
            <h1>
                <ReactLogo className="reactLogo" /> React + Express – SSR Starter – TypeScript Edition
            </h1>
            <Features />
            <div>Counter value is {value}</div>
            <button onClick={increment_counter}>Increment</button>
            <button onClick={decrement_counter}>Decrement</button>
        </div>
    );
};

export default Counter;
