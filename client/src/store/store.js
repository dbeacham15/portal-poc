import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import components from './reducers/components';
import icons from './reducers/icons';

const reducer = combineReducers({
    components,
    icons
});

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default store;