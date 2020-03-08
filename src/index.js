import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//redux
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './store/reducers'
import { Provider } from 'react-redux'

//redux devtools
import { compose } from 'redux'
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
