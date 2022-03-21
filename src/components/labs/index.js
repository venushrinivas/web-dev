import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/TodoList";

const Labs = () => {
    return (
        <>
            <h1>Labs</h1>
            <Link to="/hello">Hello</Link> | <Link to="/tuiter/home">Tuiter</Link>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <TodoList/>
            <h1>Web Dev Assignments-Non react</h1>
            <ul>
                <li><a href="/labs/index.html">Labs & Challenges</a></li>
            </ul>
        </>
    )
};

export default Labs;