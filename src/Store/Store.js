
import {createStore, combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from '../Reducers/Auth';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose;

const store = createStore(
    combineReducers({
        auth: AuthReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
);

export default store;