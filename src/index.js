import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'

import SearchResults from "./pages/searchResults/index";
import reducers from './reducers/index'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const App = ()=>{
    return (
        <div>
            <SearchResults/>
        </div>
    );
}

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
    <App/>
    </Provider>,
    document.getElementById('app')
);

console.log("hey");
