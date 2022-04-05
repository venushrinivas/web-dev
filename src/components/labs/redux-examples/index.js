import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import hello from "./reducers/hello";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import todoReducer from "./reducers/todo-reducer";
import Todos from "./todos-component"
const reducers = combineReducers({hello, todoReducer});
const store = createStore(reducers);
const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <HelloReduxExampleComponent/>
                <Todos/>
            </div>
        </Provider>
    );
};
export default ReduxExamples;